import {
	useState, ChangeEvent, FormEvent
} from 'react'

import {
	IconButton,
	VStack,
	Input,
	Image,
	Text,
	Container,
	useDisclosure
} from '@chakra-ui/react'

import { useTask, ITask } from '../contexts/tasks'
import { TaskList } from './task-list'
import { UpdateTaskModal } from './task-modal'
import plus from '../assets/plus.svg'

export function Main() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { createTask } = useTask()
	const [task, setTask] = useState("")

	function handleChange(e:ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		setTask(value)
	}

	function handleSubmit(e:FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if(!!task.length) {
			createTask(task)
			//alert(task)
			setTask("")
		}
	}

	function handleOpenModal(id:string) {
		localStorage.setItem("@todo:task-id",id)
		setTimeout(onOpen, 1000)
	}

	return(
		<VStack
			as="main"
			width="56.25rem"
			maxW="95vw"
			height="calc(100vh - 12rem)"
			transform="translateY(-2.5rem)"
			space="2.25rem"
		>
			<Container
				as="form"
				display="flex"
				width="100%"
				gap="1rem"
				onSubmit={handleSubmit}
			>
				<Input
					bg="gray.400"
					height="3.5rem"
					borderWidth={0}
					flex={1}
					value={task}
					onChange={handleChange}
					color="gray.100"
					placeholder="eg. Hack the NASA.."
					_placeholder={{
						color:"gray.300"
					}}
				/>
				<IconButton
					as="button"
					type="submit"
					height="3.5rem"
					width="3.5rem"
					px="0.5rem"
					bg="blue.400"
					_pressed={{
						outlineColor: "transparent",
						bg: "blue.500"
					}}
					_hover={[null, {
						outlineColor: "transparent",
						bg: "blue.500"
					}]}
					_active={{
						outlineColor: "transparent"
					}}
					icon={
						<>
							<Text color="gray.100">Add</Text>
							<Image
								as="img"
								src={plus}
								alt="Another svg icon, a plus simbol"
								ml="0.25rem"
							/>
						</>
					}
				/>
			</Container>

			<TaskList onOpen={handleOpenModal}/>

			<UpdateTaskModal
				isOpen={isOpen}
				onClose={onClose}
			/>
		</VStack>
	)
}
