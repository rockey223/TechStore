import "./error.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
        <div>
          <h3>404</h3>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button className="errorButton">
            Go Back to Home
          </button>
          </NavLink>
          
        </div>
      </div>
  )
}

export default ErrorPage