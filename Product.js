import React from "react"

/*function Product(props){
    return(
        <div>
            <h1>{props.product.name}</h1>
            <p>$ {props.product.price}</p>
            <p>{props.product.description}</p>
            <hr/>
        </div>
    )
}
*/

function Product(props){
    return(
        <div className="list">
            <h1 className="pd1">{props.random.name}</h1>
            <p className="pd2">{props.random.price.toLocaleString("en-US",{style: "currency", currency: "USD"})} - {props.product.description}</p>
        </div>
    )
}

export default Product