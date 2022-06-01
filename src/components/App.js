import AddTask from './AddTask';
import {useState} from "react"
import {FaSun, FaMoon} from "react-icons/fa";
import Tasks from './Tasks';
import Counter from './Counter';


function App(){
    const [theme, setTheme] = useState('light')
    const toggleTheme = ()=>setTheme(prevTheme=> prevTheme==='light'? 'dark':'light')

    return(
        <div className='app' data-theme={theme}>
            <div className='theme' onClick={()=> toggleTheme()}>{theme==="light"?<FaSun/>:<FaMoon/>}</div>
            Task Manager 2.0
            <AddTask/>
            <Tasks/>
            <Counter/>
        </div>
    )
}
export default App