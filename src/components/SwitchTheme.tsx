import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Container, HStack, useColorMode } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const buttonTheme = [
  {
    value: 'light',
    icon: <SunIcon />,
  },
  {
    value: 'dark',
    icon: <MoonIcon />,
  },
]

const SwitchTheme = () => {
  const t = useTranslations()
  const { colorMode, setColorMode } = useColorMode()

  return (
    <Container variant={"boxTheme"}>
      {buttonTheme.map(theme => (
        <Button
          variant={'switchTheme'}
          isActive={colorMode === theme.value}
          onClick={() => setColorMode(theme.value)}
          leftIcon={theme.icon}
        >
          {t(theme.value.charAt(0).toUpperCase() + theme.value.slice(1))}
        </Button>
      ))}
    </Container>
  )
}

export default SwitchTheme
