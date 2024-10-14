import {
  Button,
  ComponentWithAs,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Props = {
  action: ReactNode
  modalBody: ReactNode
}

const WindowModal = ({ action, modalBody }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const ActionButton = React.isValidElement(action)
    ? React.cloneElement(action as React.ReactElement<any>, { onClick: onOpen })
    : action

  return (
    <>
      {ActionButton}

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          {modalBody}
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default WindowModal
