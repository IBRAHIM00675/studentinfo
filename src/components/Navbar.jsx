import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return(
        <div className="nav">
            
            <div className="logo">
            <Link id="logo-h1" to="/" > <h1>Student Info</h1></Link>
            </div>

            <div className="nav-links">
            <Link id='links' to='/'>Home</Link>
            <Link id='links' to='/create'>Student Form</Link>
            </div>

        </div>
        
    )
}

export default Navbar;