import React from "react"
import TodoItem from "./ToDoItem3"
import todosData from "./todosData"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(modifier => {
            const updated = modifier.todos.map(md => {
                if (md.id === id) {
                    return {
                        ...md,
                        completed: !md.completed
                    }
                }
                return md
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todosItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {todosItems}
            </div>
        )
    }
}

export default App