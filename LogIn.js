/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.modifier = this.modifier.bind(this)
    }
    
    modifier() {
        this.setState(previous => {
            return {
                isLoggedIn: !previous.isLoggedIn
            }
        })
    }
    
    render() {   
        let button = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let display = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.modifier}>{button}</button>
                <h1>{display}</h1>
            </div>
        )
    }
}

export default Login
