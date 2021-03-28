import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handlerClick=this.handlerClick.bind(this)
        this.handlerClicker=this.handlerClicker.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    handlerClick(){
        this.setState(pState => {
            return {
                count: pState.count *2
            }
        })    
    }
    
    handlerClicker(){
        this.setState(prState => {
            return {
                count: prState.count /2
            }
        })        
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Increase number by 1!</button>
                <button onClick={this.handlerClick}>Double the number</button>
                <button onClick={this.handlerClicker}>Half the number</button>                     
            </div>
        )
    }
}

export default App
