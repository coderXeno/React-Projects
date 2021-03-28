import React from "react"

class First extends React.Component{
    constructor(){
        super()
        this.state={
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        //Fetches the data and makes a conversion to JSX 
        fetch("https://swpai.dev/api/people/1/")
            .then(response => response.json())
            .then(data=>{
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render{
        const text=this.state.loading?"loading...":this.state.character.name
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default First