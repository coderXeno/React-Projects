import React from "react"
import Joke from "./joke"
import jokes from "./jokes"

//Really messy way of handling huge data 
/*function Propss(){
    <div>
        <Joke joke={{
            question="Yo! How art thou??",
            punchline="I ought to get better day by day but my luck doesnt lol"
        }}/>

        <Joke joke={{
            question="U there bro?",
            punchline="Yup, I keep on appearing everywhere like Im omnipotent lol"
        }}/>

        <Joke joke={{
            question="What is this all about?",
            punchline="Love, Life and Coding!!"
        }}/>  

        <Joke joke={{
            question="This is a joke",
            punchline="How is it supposed to be one if u spoil the surprise!!"
        }}/>

        <Joke joke={{
            question="Nope! This is definitely wrong!",
            punchline="I make mistakes coz im a human being but I keep having fun learning and rectifying them the next time!!"

        }}/>
    </div>
}
*/

//Using a much simpler way of doing the same using map()
function Propss(){
    /*const jokeComponents = jokes.map(joke => 
        return(
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        )
    )
    */
    const jokeComponents = jokes.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div>
            {jokeComponents}            
        </div>
    )
}

export default Propss