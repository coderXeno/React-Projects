/*
Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

//There are actuaaly two ways in which this can be done
//Both show the same output
//My solution is
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

//here I directly load the data into the state
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todoItems : todosData.map(item => <TodoItem key={item.id} item={item} />)
        }
    }

    render() {

        return (
            <div className="todo-list">
                {this.state.todoItems}
            </div>
        )
    }
}

export default App


//The Challenge Giver's solution
//He uses a different variable to load the data locally
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App