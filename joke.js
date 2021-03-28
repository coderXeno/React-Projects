import React from "react"

//Accessing the props    
function Joke(props){
    return(
        <div className="lame-jokes">
            <p style={{display: props.joke.question ? "block" : "none"}}>{props.joke.question}</p>
            <p style={{color: !props.joke.question && "#000000"}}>{props.joke.punchline}</p>
        </div>
    )
}
//Another way of displaying a props that has only a punchline
//<p style={{display: !props.joke.question && "none"}}>{props.joke.question}</p>

export default Joke