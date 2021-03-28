import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender:"",
            location: "",
            isVegan: "",
            isKosher: "",
            isLactose: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked}=event.target
        type === "checkbox" ? this.setState({ 
            [name]: checked 
            }) : this.setState({ 
                [name]: value 
                })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder="First Name" 
                    />
                    <br />
                    <input 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        placeholder="Last Name" 
                    />
                    <br />
                    <input 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.handleChange} 
                        placeholder="Age" 
                    />
                    <br />
                    
                    
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender==="male"}
                        onChange={this.handleChange}
                    />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            gender="female"
                            checked={this.state.gender==="female"}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br/>
                    
                    <select
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                    >
                        <option value="goa">Goa</option>   
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                    <br />
                    
                    
                    <label>
                        Dietary Restrictions(If Any)
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegeterian?
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactose"
                            onChange={this.handleChange}
                            checked={this.state.isLactose}
                        /> Lactose Intolerance?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                </p>
                <p>Vegeterian : {this.state.isVegan? "Yes":"No"}</p>
                <p>Kosher: {this.state.isKosher? "Yes":"No"}</p>
                <p>Lactose Intolerance: {this.state.isLactose? "Yes":"No"}</p>
            </main>
        )
    }
}

export default App
