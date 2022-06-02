import {
	Image,
	VStack,
	Text
} from '@chakra-ui/react'

import { TaskCard } from './task-card'
import { useTask } from '../contexts/tasks'
import empty from '../assets/clipboard.svg'

export function TaskList() {
	const {
		tasks, removeTask,
		toggleTaskCompletition
	} = useTask()

	if(!tasks.length) {
		return (
			<VStack
				py="3rem"
				space="2rem"
				textAlign="center"
			>
				<Image
					src={empty}
					height="3rem"
					width="auto"
					mb="2rem"
					filter="invert(40%)"
					alt="Empty task list icon"
				/>
				<Text
					color="gray.100"
					fontFamily="Inter, sans-serif"
				>
					You registered no tasks yet.
					{"\n"}
					<Text color="gray.300" fontWeight={400}>
						Create tasks and start organizing yourself!
					</Text>
				</Text>
			</VStack>
		)
	}

	return (
		<VStack
			py="3rem"
			space="2rem"
			textAlign="center"
			width="100%"
		> {
	tasks.map(task => (
		<TaskCard
			key={task.id}
			task={task}
			onComplete={()=>toggleTaskCompletition(task.id)}
			onUpdate={()=>{}}
			onDelete={()=>removeTask(task.id)}
		/>
	))
		} </VStack>
	)
}
