import { Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const TABLE_HEAD = ['fullname', 'email', 'active']

const ViewTable = () => {
  const t = useTranslations()
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  )
}

export default ViewTable