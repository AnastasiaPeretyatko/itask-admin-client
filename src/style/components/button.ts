import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  maxW: 'max-content'
})

const switchTheme = defineStyle(props => {
  return {
    textTransform: 'capitalize',
    _active: {
      bg: 'PRIMARY_BLUE',
      color: 'white',
      borderRadius: 'md',
    },
  }
})

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { switchTheme },
  defaultProps: {
    size: 'sm',
  },
})
