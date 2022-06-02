import {
	Image,
	Flex,
	Text
} from '@chakra-ui/react'
import rocket from '../assets/rocket.svg'

export function Header() {
	return (
		<Flex
			as="header"
			width="100vw"
			bg="gray.700"
			justify="center"
			pt="3rem"
			pb="6rem"
			gap="1rem"
		>
			<Image
				src={rocket}
				alt="A logo of a rocket with two colors."
			/>
			<Text
				as="p"
				color="blue.400"
				fontSize="2rem"
				fontWeight="700"
				fontFamily="Inter, sans-serif"
			>
				TO<Text as="span" color="purple.400">DO</Text>
			</Text>
		</Flex>
	)
}
