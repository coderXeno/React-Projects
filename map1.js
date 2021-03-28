import React from "react"
import Product from "./Product"
import pData from "./PData"

function Mapp(){
    const components=pData.map(random => <Product key={random.id} product={random} />)
    return(
        <div>
            {components}
        </div>
    )
}

export default Mapp