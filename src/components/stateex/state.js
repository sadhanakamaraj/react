import {useState} from 'react';
import State1 from './state1/state1';
function Statex(){
    const [text,setText]=useState('Hello')
  return(<>
 <State1 content={text}/>
 <button onClick={()=>setText("Welcome")}>Change</button>
   </>
); 
} 
export default Statex