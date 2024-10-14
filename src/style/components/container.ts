import {
  defineStyle,
  defineStyleConfig,
  StyleFunctionProps,
} from '@chakra-ui/react'

// define the base component styles
const baseStyle = defineStyle(() => {
  return {
    padding: 0,
    maxW: 'unset',
    width: 'unset'
  }
})

const viewDate = defineStyle((props: StyleFunctionProps) => {
  return {
    borderRadius: '5px',
    backgroundColor: 'BLACK_400',
    color: 'white',
    fontSize: 'sm',
    // padding: '1px 5px',
    margin: 0,
    width: 'min-content',
    height: '100%',
    whiteSpace: 'nowrap',
  }
})

const header = defineStyle((props: StyleFunctionProps) => {
  return {
    display: 'flex',
    flexDir: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    paddingY: '10px',
    marginX: '10px',
    borderBottom: '1px solid',
    borderColor: 'whiteAlpha.200',
  }
})

const boxTheme = defineStyle(props => {
  return {
    backgroundColor: 'background.switch',
    width: 'min-content',
    display: 'flex',
    flexDir: 'row',
    padding: 1.5,
    borderRadius: 'md',
    gap: 1,
    margin: 0,
  }
})

export const containerTheme = defineStyleConfig({
  baseStyle,
  variants: { header, viewDate, boxTheme },
})
