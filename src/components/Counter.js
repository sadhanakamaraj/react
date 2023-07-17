import { useDispatch, useSelector } from "react-redux"
import { SelectCount,increment,decrement } from "../redux/counterReduce";
function Counter(){
     const dispatch = useDispatch();
     const reduxData=useSelector(SelectCount);
    return(
        <>
        <p>{reduxData}</p>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )

    
}
export default Counter