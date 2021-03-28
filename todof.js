import React from "react"

function TodoItem(props) {
    //Added some inline styling to the code
    const style = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? style: null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem