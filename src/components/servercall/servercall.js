import { useEffect, useState } from "react";
import Child from "../additem/additem1";
import axios from "axios";
function LoadData(){
const [data,setData] = useState([]);
const [load,setLoad] = useState(false);
function Servercall(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .finally(()=>{
        setLoad(true)
    })
    .then((res)=>{
        setData(res.data)
    })
    .catch(()=>{
        setData([])
    })

}
useEffect(function(){
Servercall();
},[])

  return<>
    <button onClick={Servercall}>Load</button>
    {data.length===0 && <p> No data found</p>}
    {data.map((ele)=>{
        return <><Child inform={ele}/>
        </>})
     }
    </>  
}
export default LoadData;