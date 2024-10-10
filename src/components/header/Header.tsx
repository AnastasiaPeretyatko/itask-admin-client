import { BellIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, Button, Container, Flex, HStack, useColorMode } from '@chakra-ui/react'
import moment from 'moment'
import React, { useState } from 'react'

const Header = () => {
  // const [theme, setTheme] = useState()
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container variant={"header"}>
      <Button onClick={() => toggleColorMode()}>
        {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
      </Button>
      <BellIcon boxSize={6}/>
      <Container variant={"viewDate"}>{moment().format('ll')}</Container>
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </Container>
  )
}

export default Header
