import { extendTheme } from '@chakra-ui/react'

const colors = {
	gray: {
		700: '#0d0d0d',
		600: '#1a1a1a',
		500: '#262626',
		400: '#333333',
		300: '#808080',
		200: '#d9d9d9',
		100: '#f2f2f2'
	},
	purple: {
		500: '#5e60ce',
		400: '#8284fa'
	},
	blue: {
		500: '#1e6f9f',
		400: '#4ea8de'
	}, 
	red: {
		400: '#e25858'
	}
}

export const theme = extendTheme({ colors })
