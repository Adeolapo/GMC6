

function Eachtodo(props){
    function deletebtn(){
        return(
            props.setvalues(props.values.filter(item=>{
                return(
                    item.id !== props.id
                )
            }))
        )
    }

    function completebtn(){
        return(
            props.setvalues(props.values.map(item =>{
                console.log(props.completed)
                if(props.id === item.id){
                    return{
                        ...item,completed: !item.completed
                    }
                }
                return item;
            }))
        )
    }
    console.log(Eachtodo.completed)
    return(
    <div className="container">
        <ul>
            <div className={`li ${props.completed ? "comp" : ""}`}>
                <li>{props.text}</li>
                <div>
                    <button onClick={deletebtn}>Cancel</button>
                    <button onClick={completebtn}>Done</button>
 
                </div>
            </div>
        </ul>
    </div>
    )
}

export default Eachtodo