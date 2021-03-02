import { Thead, Tr, Th,Tbody, Td, Tfoot} from '@chakra-ui/react';
function TableHead({one,two,tre}) {
    return (
        <Thead>
        <Tr>
          <Th>{one}</Th>
          <Th>{two}</Th>
          <Th >{tre}</Th>
        </Tr>
      </Thead>
    )
}

export default TableHead
