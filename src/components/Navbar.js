import '../styles/Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-toggler">
                    <h1 className="navbar-brand text-light">CocktailsDB</h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link text-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link text-light">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;