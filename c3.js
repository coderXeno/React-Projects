import React from "react"

class App extends React.Component {
    constructor() {
        //super accesses the parent class, React.Component
        //in this case. Takes away prewritten stuff we can use
        super()
        //Setting the state default vlaue to an empty object
        //this.state={}
        this.state = {
            reply: "Hellllooo!!!"
        }
    }

    render() {
        return (
            <div>
                <h1>This is the declaration of a State!! Mr. State, please say hello!!</h1>
                <p>{this.state.reply}</p>
            </div>
        )
    }
}

export default App