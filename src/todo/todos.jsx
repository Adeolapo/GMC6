import Eachtodo from "./eachtodo"
function Todos(props){
    console.log(props.filter)
   
    return(
        <div>{props.filter.map(item=>{
            return(
                <Eachtodo  values={props.values} setvalues={props.setvalues} text={item.text} id={item.id} completed={item.completed} />   
            )

        })}</div>
        /*{props.values.map(item =>{
            
            )
        })}*/
        
    )
}

export default Todos
/*<div className="container">
        <ul>
            <div className="li">
                <li>

                </li>
                <div>
                    <button>Cancel</button><button>Done</button>
                </div>
            </div>
            
        </ul>
 </div>
 <div className="container">
                    <ul>
                        <div className="li">
                            <li>{item.text}</li>
                            <div>
                                <button>Cancel</button>
                                <button>Done</button>
                            </div>
                        </div>
                    </ul>
                </div>
 */