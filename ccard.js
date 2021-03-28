import React from "react"
import ContactCard from "./ccarda"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                name="Astrophysics" 
                imgUrl="./images/4.jpg" 
                email="bk5853079@gmail.com"
            />
            
            <ContactCard 
                name="Quantum Physics" 
                imgUrl="./images/5.jpg"  
                email="bk5853079@gmail.com"
            />
            
            <ContactCard 
                name="Particle Physics" 
                imgUrl="../images/6.jpg" 
                email="bk5853079@gmail.com"
            />
            
            <ContactCard 
                name="Optics" 
                imgUrl="../images/8.jpg" 
                email="bk5853079@gmail.com"
            />
            
        </div>
    )
}

export default App