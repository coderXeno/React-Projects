import React from "react"

function checker(){
    console.log("Sorry!! Can't be changed")
}

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" id="checkss" checked={props.item.completed} onChange={checker}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem