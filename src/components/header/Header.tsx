import { BellIcon } from '@chakra-ui/icons'
import { Avatar, Container, Heading, HStack } from '@chakra-ui/react'
import moment from 'moment'
import SwitchTheme from '../SwitchTheme'

const Header = () => {
  return (
    <Container variant={'header'}>
      <HStack>
        <Heading variant={"logo"}>itask</Heading>
        <Heading variant={"logo"}>admin</Heading>
      </HStack>
      <HStack>
        <SwitchTheme />

        {/* нужно еще обдумать стоит ли выводить дату в хедере */}
        {/* <Container variant={'viewDate'}>{moment().format('ll')}</Container>  */}

        <BellIcon boxSize={6} />
        <Avatar
          size={'sm'}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </HStack>
    </Container>
  )
}

export default Header
