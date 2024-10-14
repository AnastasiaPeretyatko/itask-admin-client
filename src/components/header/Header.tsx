import { BellIcon } from '@chakra-ui/icons'
import { Avatar, Container } from '@chakra-ui/react'
import moment from 'moment'
import SwitchTheme from '../SwitchTheme'

const Header = () => {
  return (
    <Container variant={'header'}>
      <SwitchTheme />
      <BellIcon boxSize={6} />
      <Container variant={'viewDate'}>{moment().format('ll')}</Container>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Container>
  )
}

export default Header
