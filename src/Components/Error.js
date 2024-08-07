import { Link } from "react-router-dom"
import "../error.css"

const Error = () => {
    return(
        <div className="errorContainer">
            <h3>Sorry, Page Not Found 🤷‍♂️</h3>
            <Link to="/"><h3>Take Me Back⏎</h3></Link>
        </div>

    )
}

export default Error;