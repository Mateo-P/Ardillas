import {useState,useEffect} from "react"
import {Box} from '@chakra-ui/react';
import EnhancedTable from "./components/Table"
import TableMMC from "./components/TableMMC"
const url ='https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json';

function App() {
const [data, setData] = useState([]);
useEffect(async () => {
  let response =  await fetch(url);
  let info = await response.json()
  setData(info);
}, [])

console.log(data)
let allEvnetes = [];
data.forEach((log)=>{
  log.events.forEach((eventt)=>{
    allEvnetes=[...allEvnetes,eventt]
  })
})
console.log()
if(data){
return (
  <>
    <EnhancedTable data={data}/>
    <Box bg="white" w="100%" p={4} color="white">
  This is the Box
</Box>
  <TableMMC uniqueEvents={[...new Set(allEvnetes)]} data={data}/>
  </>
  );
}
  
}

export default App;
