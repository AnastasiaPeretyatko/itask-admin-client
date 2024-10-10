import React from 'react'
import Header from '../header/Header'
import { Flex } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <Flex direction={"column"} width="100%" height="100%">
      <Header />
      {children}
    </Flex>
  )
}

export default AppLayout
