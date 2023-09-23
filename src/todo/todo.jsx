import { useState,useEffect } from "react"
import Todos from "./todos"
import Todotop from "./todotop"
import Eachtodo from "./eachtodo"


function Todo(){
    const [text,setText] = useState("")
    function handleText(e){
        const prevText= e.target.value
        setText(prevText)
    }

    /*track todoarea*/

    const [values,setValues] = useState([])

    function handleClick(){
        setValues(prev =>{
            return(
                [...prev,{text: text,completed: false, id: Math.random() * 1000}]
            )
        });
        setText("");
    }
    console.log(values.completed)

    /* keep track of status of todos*/
    const [status, setStatus] = useState("All")

    function handleStatus(e){
       return setStatus(e.target.value)
    }
    console.log(status)

    /*to hold the filtered states*/
    const [filter,setFilter]= useState([])

    function handleFilter(){
            switch (status) {
                case "Completed":
                    setFilter(values.filter(item=>{
                        return item.completed === true
                    }))
                    break;

                case "Uncompleted":
                    setFilter(values.filter(item=>{
                      return  item.completed === false
                    }))
                    break;
            
                default:
                    setFilter(values)
                    break;
            }
    }

    useEffect(
        function(){
            handleFilter()
        },[status,values]
    )
 
    return(
        <div className="body">
            <div className="innerbody">
                <h1>Todo List</h1>
                <Todotop setText={setText} handleText={handleText} handleClick={handleClick} text={text} handleStatus={handleStatus} status={status} setStatus={setStatus} handleFilter={handleFilter}/>
                <Todos values={values} setvalues={setValues} text={text} id={values.id} completed={values.completed} filter={filter}/>
            </div>  
        </div>
    )
}

export default Todo