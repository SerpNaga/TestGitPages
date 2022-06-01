import {useSelector, useDispatch} from 'react-redux'
import {incCountAct, decCapCountAct} from "../store/store"

function Counter(){
    const dispatch = useDispatch()
    const counter = useSelector((state)=>state.countReducer.count)

    const inc = (t)=> dispatch(incCountAct(t))
    const decCap = (t, c)=> dispatch(decCapCountAct(t, c))

    return(
        <div>
        <p>{counter}</p>
        <div className='bct'>
                <button className='btn neg' onClick={()=>decCap(5, 0)}>Decrease by 5</button>
                <button className='btn neg' onClick={()=>decCap(1, 0)}>Decrease by 1</button>
                <button className='btn' onClick={()=>inc(1)}>Increase by 1</button>
                <button className='btn' onClick={()=>inc(5)}>Increase by 5</button>
            </div>
        </div>
    )
}
export default Counter