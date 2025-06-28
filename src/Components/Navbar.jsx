import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <header>
                <h1>Azi-tech</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/prodacts">Prodacts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button>Join us</button>
                </div>
            </header>
        </>
    )
}