
const Task= (props) =>{
   return(
    <div className="task"
    style={{ backgroundColor : props.completed ? "lightgreen":"cyan"}}>
        <h1>{props.taskName}</h1>
        <div className="buttons">
            <button id="completebtn" onClick={()=>props.completeTask(props.id)}>Complete</button>
            <button id="deletebtn" onClick={()=>props.deleteTask(props.id)}>Delete</button>
        </div>
    </div>
   )
}
export default Task;