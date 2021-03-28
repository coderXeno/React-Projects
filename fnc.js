import React from "react"
import ReactDOM from "react-dom"

function Compo(){
    return <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
}

//Using functional React Components
ReactDOM.render(<Compo />, document.getElementById('root'))