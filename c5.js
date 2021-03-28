import React from "react"
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let phase
        if(this.state.isLoggedIn===false){
            phase="out"
        }
        else{
            phase="in"
        }
        
        return (
            <div>
                <h1>You are currently logged {phase}</h1>
            </div>
        )
    }
}

export default App
