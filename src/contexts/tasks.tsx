import {
	useState,
	useEffect,
	createContext,
	useContext,
	ReactNode
} from 'react'

export type ITask = {
	id:string;
	text: string;
	isDone: boolean;
}

interface TasksData {
	tasks: ITask[];
	createTask: (text:string) => void;
	removeTask: (id:string) => void;
	updateTask: (task:ITask) => void;
	toggleTaskCompletition: (id:string) => void;
}

interface ProviderProps{
	children: ReactNode;
}

const TasksContext = createContext({} as TasksData)

const KEY = "@todo:tasks-list"
export function TasksProvider({ children }:ProviderProps) {
	const [tasks, setTasks] = useState<ITask[]>(()=>{
			const stored = localStorage.getItem(KEY)
			const tasks = stored ? JSON.parse(stored) : [];
			return tasks;
	})

	function generateID() {
		const id = `${Date.now()}-${String(tasks.length).padStart("0", 3)}`

		return id;
	}

	function createTask(text:string) {
		try {
		const updated = [...tasks, {
			text,
			isDone: false,
			id: generateID()
		}]

		localStorage.setItem(
			KEY,
			JSON.stringify(updated)
		)

		setTasks(updated)
		} catch (err) {
		 alert(err)
		}
	}

	function removeTask(id:string) {
		const updated = tasks.filter(task => task.id !== id)
		localStorage.setItem(
			KEY,
			JSON.stringify(updated)
		)
		setTasks(updated)
	}

	function updateTask(task:ITask) {
		const updated = tasks.map(tasked => {
			if(task.id !== tasked.id) {
				return tasked;
			}

			return task;
		})

		localStorage.setItem(
			KEY,
			JSON.stringify(updated)
		)

		setTasks(updated)
	}

	function toggleTaskCompletition(id:string) {
		const updated = tasks.map(task => {
			if(task.id !== id) {
				return task;
			}

			return {
				...task,
				isDone: !task.isDone
			}
		})

		localStorage.setItem(
			KEY,
			JSON.stringify(updated)
		)

		setTasks(updated)
	}

	return (
		<TasksContext.Provider value={{
			tasks,
			createTask,
			updateTask,
			removeTask,
			toggleTaskCompletition
		}}>
			{ children }
		</TasksContext.Provider>
	)
}

export function useTask() {
	return useContext(TasksContext)
}
