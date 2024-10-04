import { useRouteError } from "react-router-dom";


function NotFound() {

    useRouteError()
    
    return (
        <>
            <h1>Ups error</h1>
            <img src="https://tomba-hopkins.github.io/Warung-Sidi/img/menu/4.jpg" alt="Error" />
        </>
    )
}

export default NotFound