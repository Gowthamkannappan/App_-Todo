export const Task = (props) => {
    return (
        <div className="task">
        


          <h3 style={{backgroundColor : props.completed ? "green" : "white" }}> { props.taskName } </h3>
          <button id="cmplt" onClick={() => props.completeTask(props.id)}> Complete </button>
          <button id="dlt" onClick={() => props.deleteTask(props.id)}> Delete Task </button>
        </div>
    );
}