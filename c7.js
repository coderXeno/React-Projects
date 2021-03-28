import React from "react"

function handleClick(){
    console.log("I was clicked")
}

function handleHover(){
    console.log("I was hovered over")
}

//The following can also be used
//<img src="blah blah blah" onMouseOver={()=> console.log("Hovered!!")}
function App(){
    return(
        <div>
            <img src="https://www.fillmurray.com/200/100" onMouseOver={handleHover}/>
            <br />
            <br />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default App