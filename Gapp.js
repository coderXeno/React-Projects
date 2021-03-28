import React from "react"

//Import the first set of 3 when doing the components in separate files
import Navbar from "./nav"
import Maincontent from "./mc"
import Footer from "./footer"

//Import the next set of 3 when doing the components and exporting them all from one file
import Navbar from "./combined"
import Maincontent from "./combined"
import Footer from "./combined"


function Gapp(){
    return( 
        <div>
            <Navbar />
            <Maincontent />
            <Footer />
        </div>
    )
}

export default Gapp