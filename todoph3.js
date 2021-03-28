import React from "react"
import TodoItem from "./TodoItem2"
import todosData from "./todosData"

function App() {
    const todos=todosData.map(items => <TodoItem key={items.id} item={items} />)
    return (
        <div className="todo-list">
            {todos}
        </div>
    )
}

export default App