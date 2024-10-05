import { useLoaderData } from "react-router-dom"

function About(){

    const quotes = useLoaderData()
    console.log(quotes)

    return (
        <>
            <h2>About</h2>
            <p>This is about page</p>
            <br />
            <hr />
            <p>&quot;{quotes.quote}&quot;</p>
            <p>~ <em>{quotes.author}</em></p>
        </>
    )
}

export default About