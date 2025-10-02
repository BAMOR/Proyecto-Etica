import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">Blog Ético</Link>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Portada</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/introduccion">Introducción</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )

}
export default Navbar;