import {
	useState, useEffect, ChangeEvent, FormEvent
} from 'react'

import {
	Flex,
	Input,
	Button,
	Container,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalHeader,
	ModalCloseButton
} from '@chakra-ui/react'

import { ITask, useTask } from '../contexts/tasks'

interface ModalProps {
	onClose: ()=>void;
	isOpen: boolean;
}

export function UpdateTaskModal({
	onClose, isOpen
}:ModalProps) {
	const { updateTask, tasks } = useTask()
	const [updated, setUpdated] = useState<ITask>({} as ITask)

	useEffect(()=>{
		if(isOpen) {
			const stored = localStorage.getItem("@todo:task-id")
			const tasked:ITask = tasks.find(
				task => task.id === stored
			)
	
			setUpdated(tasked)
		}	
	}, [isOpen])

	function handleChange(e:ChangeEvent<HTMLInputElement>) {
		const { value } = e.target

		setUpdated(prev => ({ ...prev, text: value }))
	}

	function handleSubmit(e:FormEvent<HTMLFormElement>) {
		e.preventDefault()
		updateTask(updated)
		setTimeout(onClose, 1000)
	}

	return (
		<Modal isOpen={isOpen}>
			<ModalOverlay/>
			<ModalContent
				maxWidth="95vw"
			>
				<ModalHeader bg="gray.600">
					<Button
						bg="purple.400"
						type="submit"
						form="update"
						color="gray.100"
					>UPDATE</Button>
					<ModalCloseButton
						onClick={onClose}
						color="gray.100"
					/>
				</ModalHeader>

				<ModalBody
					as="form"
					id="update"
					display="flex"
					width="100%"
					bg="gray.600"
					gap="1rem"
					pb="1rem"
					onSubmit={handleSubmit}
				>
					<Input
						bg="gray.400"
						height="3.5rem"
						borderWidth={0}
						flex={1}
						color="gray.100"
						value={updated.text}
						onChange={handleChange}
						placeholder="eg. Hack the NASA.."
						_placeholder={{
							color:"gray.300"
						}}
					/>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
