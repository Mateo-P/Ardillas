import {useState,useEffect} from "react"
import {Table, Thead, Tr, Th,Tbody, Td, Tfoot} from '@chakra-ui/react';
import TableHead from "./TableHead"
import TableRow from "./TableRow"
const  EnhancedTable = ({data})=> {
console.log(data);
    return (
        <Table size="sm">
        <TableHead one={"#"} two={"Events"} tre={"Squirrel"}/>
        <Tbody>
         {data?.map((row,i)=>(<TableRow key={i} num={i} events={row.events} squirrel={row.squirrel}/>)
             
         )}
        </Tbody>
       
      </Table>
    )
}

export default EnhancedTable
