import {
	VStack
} from '@chakra-ui/react'
import { Header } from './components/header'
import { Main } from './components/main'

function App() {
  return (
    <VStack
			bg="gray.600"
			minHeight="100vh"
			overflowY="scroll"
		>
			<Header />
			<Main />
    </VStack>
  )
}

export default App
