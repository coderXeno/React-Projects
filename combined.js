import React from "react"

//Doing everything together just to reduce the growing complexity of the folder tree
function Maincontent(){
    return(
        <div className="main">
            <h3>This is King Z</h3>
            <p>King Z loves physics, coding and gaming.</p>
        </div>
    )
}

function Navbar(){
    return (
        <navbar className="navbar">
            <a href="#">Physics</a>
            <a href="#">Coding</a>
            <a href="#">Gaming</a>
        </navbar>
    )
}

function Footer(){
    return (<div className="foot">
                <footer>
                    This is a footer for a sample webpage
                </footer>
            </div>)
}

export default Navbar
export default Maincontent
export default Footer