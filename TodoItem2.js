import React from "react"

//For the props accessing part, we need to take that items parameter from => const todos=todosData.map(items => <TodoItem key={items.id} item={items} />)
function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.items.completed}/>
            <p>{props.items.text}</p>
        </div>
    )
}

export default TodoItem