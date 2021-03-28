import React from "react"
import ReactDOM from "react-dom"

function Wpage(){
  return <div>
            <h1>King Z</h1>
            <p>I am an aspiring coder and web developer. I love physics tho lol.</p>
            <ol>
              <li>Japan</li>
              <li>New York</li>
              <li>Australia</li>
            </ol>
         </div>
}

ReactDOM.render(<Wpage />, document.getElementById("root"))