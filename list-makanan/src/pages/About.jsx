import { useLoaderData } from "react-router-dom"
import Faq from "../components/Faq/Faq"

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
            <Faq/>
        </>
    )
}

export default About