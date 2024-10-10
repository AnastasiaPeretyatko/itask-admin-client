import { defineStyle, defineStyleConfig, StyleFunctionProps } from '@chakra-ui/react'

// define the base component styles
const baseStyle = {
  borderRadius: 'xl',
  fontWeight: 'medium',
  borderColor: 'red',
  border: '1px solid'
}

const viewDate = defineStyle((props: StyleFunctionProps) => {
  return {
    borderRadius: '5px',
    backgroundColor: 'BLACK_400',
    color: 'white',
    padding: '1px 5px',
    margin: 0,
    width: 'min-content',
    whiteSpace: 'nowrap'
  }
})

const header = defineStyle((props: StyleFunctionProps) => {
  return {
    display: 'flex',
    flexDir: 'row',
    alignItems: 'center',
    gap: '20px',
    minW: '100vw',
    justifyContent: 'end',
    padding: '10px',
    margin: 0
  }
})

// export the component theme
export const containerTheme = defineStyleConfig({ variants: {header, viewDate} })