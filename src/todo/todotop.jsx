
function Todotop(props){
    console.log(props.handleStatus)
    return(
        <div className="top">
            <div className="todoarea">
                <input type="text" onChange={props.handleText} placeholder="input your task" value={props.text}/>
                <button onClick={props.handleClick}>Submit</button>
            </div>
            <select name="" id="" onChange={props.handleStatus}>
                <option onClick={props.handleFilter} value="All">All</option>
                <option onClick={props.handleFilter} value="Completed">Completed</option>
                <option onClick={props.handleFilter} value="Uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}
export default Todotop
