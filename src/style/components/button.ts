import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

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
  variants: { switchTheme },
  defaultProps: {
    size: 'xs',
  },
})
