import React from "react"

class App extends React.Component{
    anyMethod(){
        //...
    }

//We need to use 'this' in order to access the props; parameters not taken

    render(){
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}

export default App