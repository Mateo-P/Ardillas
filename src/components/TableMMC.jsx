import React from 'react'
import {Table, Thead, Tr, Th,Tbody, Td, Tfoot} from '@chakra-ui/react';
import TableHead from "./TableHead"
import TableRow from "./TableRow"
function TableMMC({uniqueEvents,data}) {
    console.log(uniqueEvents);
    console.log(data);
    let  matrix = [];
    for (let index = 0; index < uniqueEvents.length; index++) {
        matrix[index] = [0,0,0,0];
        
    }
    const calculeMatrix = ()=>{
        uniqueEvents.forEach((evento,i)=>{
            data.forEach(({events,squirrel})=>{
                let h=0;
                let found = events.find((env)=>
                    env==evento
                )
                if(squirrel){
                    h+=2;
                }
                if(found!== undefined||null)
                {
                    h+=1
                }
                matrix[i][h]+=1
                
            })
        })
    }
    calculeMatrix();

    const calculateMCC= (matrix,i)=>{
        console.log(i);
        console.log(matrix[i]);
        let MMC=0;
        let dividendo=matrix[i][3]*matrix[i][0]-matrix[i][2]*matrix[i][1];
        let divisor=(matrix[i][3]+matrix[i][2])*(matrix[i][3]+matrix[i][1])*(matrix[i][0]+matrix[i][2])*(matrix[i][0]+matrix[i][1]);
       console.log(dividendo);
        MMC=dividendo/Math.sqrt(divisor)
        return MMC;

    }
    return (
        <Table size="sm">
         <TableHead one={"#"} two={"Event"} tre={"Correlation"}/>
        <Tbody>
         {uniqueEvents?.map((row,i)=>(<TableRow key={i} num={i} events={[row]} squirrel={calculateMCC(matrix,i)}/>)
             
         )}
        </Tbody>
       
      </Table>
    )
}

export default TableMMC
