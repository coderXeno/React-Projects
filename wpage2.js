import React from "react"
import ReactDOM from "react-dom"

//Created a Web page that uses inline as well as variable declared CSS to style the HTML code

const justfun={
  color: "violet",
  fontFamily: "Roboto",
  padding: "45px"
};

function Wpage(){
  return <div style={{backgroundColor: "lightgray"}}>
            <h1 style={{color: "blue"}}>King Z</h1>
            <p style={{color: "red"}}>I am an aspiring coder and web developer. I love physics tho lol.</p>
            <ol style={justfun}>
              <li>Japan</li>
              <li>New York</li>
              <li>Australia</li>
            </ol>
         </div>
}

ReactDOM.render(<Wpage />, document.getElementById("root"))