import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { TasksProvider } from './contexts/tasks'
import { theme } from './theme'

ReactDOM
	.createRoot(document.getElementById('root')!)
	.render(
		<ChakraProvider
			theme={theme}
			resetCSS
		>
			<TasksProvider>
				<App />
			</TasksProvider>
		</ChakraProvider>
	)
