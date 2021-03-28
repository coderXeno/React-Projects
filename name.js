import React from "react"

function GetName(){
    return (
        <div>
            <form>
                <label for="firstname">Please Enter Your First Name</label>
                <input type="text" id="firstname" name="firstname"></input>
                <label for="surname">Please Enter Your Last Name</label>
                <input type="text" id="surname" name="surname"></input>
                <input type="submit" onclick="NameX()"></input>
            </form>
        </div>
    )
}

function NameX(){
    var input=document.getElementById("firstname")+document.getElementById("surname")
    return(input)
}

export default NameX