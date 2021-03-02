import { Thead, Tr, Th,Tbody, Td, Tfoot} from '@chakra-ui/react';
function TableRow({num=1,events="hola,que,mas",squirrel=true}) {

    const createEvents = ()=>{
        let newEvents = "";
        events.forEach((event,i)=>{
            i ==0?newEvents+=`${event}`:newEvents+=`,  ${event}`
            
        })
        return  newEvents;
    }
    return (
        <Tr bg={squirrel==true?"#ffcccb":"white"}>
            <Td>{num}</Td>
            <Td>{createEvents()}</Td>
            <Td >{`${squirrel}`}</Td>
          </Tr>
    )
}

export default TableRow
