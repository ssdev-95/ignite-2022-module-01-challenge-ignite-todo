import {
	IconButton,
	Image,
	Text,
	Flex,
	Box
} from '@chakra-ui/react'

import { ITask } from '../contexts/tasks'
import trash from '../assets/trash.svg'
import check from '../assets/check.svg'

interface CaardProps {
	task: Omit<ITask, 'id'>;
	onUpdate: () => void;
	onDelete: () => void;
	onClomplete: () => void;
}

export function TaskCard({
	task,
	onUpdate,
	onDelete,
	onComplete
}:CardProps) {
	return (
		<Box
			bg="gray.500"
			width="100%"
			p="0.5rem"
			rounded="0.35rem"
			overflow="hidden"
		>
			<Flex
				justify="flex-start"
				items="center"
				height="100%"
				gap="1rem"
			>
			<IconButton
				height="1.5rem"
				minWidth="1.5rem"
				borderWidth={task.isDone ? 0 : "2px"}
				px="0.25rem"
				py="0.25rem"
				my="auto"
				_hover={{
					bg: task.isDone? "purple.500":"gray.500",
					outlineWidth: 0,
					borderWidth: "2px"
				}}
				_focus={{
					borderWidth: 2,
					outlineWidth: 2
				}}
				borderColor={task.isDone ? "purple.500" : "blue.500"}
				bg={task.isDone? "purple.500": "gray.500"}
				rounded="full"
				onClick={onComplete}
				icon={
					<Image
						src={check}
						opacity={task.isDone ? 1 : 0}
						height="0.75rem"
						width="0.75rem"
					/>
				}
			/>
			<Text
				color={
					task.isDone ?
					"gray.300" :
					"gray.100"
				}
				textAlign="left"
				overflow="hidden"
				my="auto"
				maxW="100%"
				flex={1}
				textOverflow="ellipsis"
				textDecoration={
					task.isDone ?
					"line-through" :
					"none"
				}
			>
				{task.text}
			</Text>
			<IconButton
				onClick={onDelete}
				ml="auto"
				bg="gray.500"
				icon={
					<Image
						src={trash}
						height="1rem"
						width="auto"
						filter="gray-scale(100)"
					/>
				}
			/>
			</Flex>
		</Box>
	)
}
