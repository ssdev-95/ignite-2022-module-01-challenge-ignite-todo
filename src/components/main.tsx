import {
	useState, ChangeEvent, FormEvent
} from 'react'

import {
	IconButton,
	VStack,
	Input,
	Image,
	Text,
	Container
} from '@chakra-ui/react'

import { useTask, ITask } from '../contexts/tasks'
import { TaskList } from './task-list'
import plus from '../assets/plus.svg'

export function Main() {
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

	return(
		<VStack
			as="main"
			width="56.25rem"
			maxW="95vw"
			height="calc(100vh - 12rem)"
			transform="translateY(-3rem)"
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

			<TaskList />
		</VStack>
	)
}
