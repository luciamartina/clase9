import React from "react"
import { Link } from "react-router-dom" 

const Error404 =() => {
    return(
        <main>
            <h2>Disculpa el error, estaremos reparandolo!</h2>
            <Link to="/"> Vuelve a Home</Link>
        </main>
    )
}

export default Error404