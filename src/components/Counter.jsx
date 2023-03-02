import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {decrement,increment,incrementByAmount,reset} from '../container/counter/counterSlice'

function Counter() {
  const count = useSelector(state=>state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount,setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;
  const resetHandler = ()=>{
    setIncrementAmount(0);
    dispatch(reset());
  }
  return (
    <div >
      <p>{count}</p>
      <div > 
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
      <div className="byvalue">
        <input type="number"value={incrementAmount}  onChange={(e)=>setIncrementAmount(e.target.value)} />
      </div>
      <div>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add amount</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
