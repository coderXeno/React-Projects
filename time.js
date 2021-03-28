import React from "react"
import ReactDOM from "react-dom"
import GetName from "./name"
import NameX from "./name"

//Added a bit of tweak to the Wishing Code!!
//This code takes the username as input, imports it and then wishes the user accordingly with the name
return(<GetName />, document.getElementById("root"))
const nameX=<NameX />

function App(){
    const date=new Date()
    const hours=date.getHours()
    let timeOfDay

    if(hours<12){
        timeofDay="Morning"
    }
    else if(hours>=12 && hours<17){
        timeOfDay="Afternoon"
    }
    else if(hours>=17 & hours<20){
        timeOfDay="Evening"
    }
    else {
        timeOfDay="Night"
    }

    return(
        <h1>Good {timeOfDay}, {nameX}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))