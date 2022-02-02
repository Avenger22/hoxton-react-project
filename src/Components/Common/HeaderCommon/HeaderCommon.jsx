import { Link, NavLink, useNavigate } from "react-router-dom";
import '../HeaderCommon/HeaderCommon.css'

export default function HeaderCommon() {

    const navigate = useNavigate()

    function handleServicesClick() {
        navigate("/services")
    }
    
    return (

        <>

            <header className="header">

                <div className="header-group-1">
                    
                    <ul className="ul-header-1">
                        
                        <li id="special-logo">

                            <Link to = "/home">
                                AlbVitaFitness
                            </Link>

                        </li>
                        
                        <li><NavLink to = "/home">Home</NavLink></li>
                        <li><NavLink to = "/about-us">About Us</NavLink></li>

                        <div className="dropdown">

                            <button className="dropbtn" onClick={handleServicesClick}>Services</button>

                            <div className="dropdown-content">
                                <Link to ="/services/1">Yoga</Link>
                                <Link to ="/services/2">Fitness</Link>
                                <Link to ="/services/3">Crossfit</Link>
                                <Link to ="/services/4">Bodybuilding</Link>
                                <Link to ="/services/5">Martial arts</Link>
                                <Link to ="/services/6">Cardio</Link>
                                <Link to ="/services/7">Resistance</Link>
                            </div>

                        </div>
                        
                        <li><NavLink to = "/teams">Our Team</NavLink></li>
                        <li><NavLink to = "/blog">Blog</NavLink></li>
                        <li><NavLink to = "/products">Products</NavLink></li>
                        <li><NavLink to = "/contact">Contact</NavLink></li>
                    
                    </ul>

                </div>

                <div className="void"></div>

                <div className="header-group-2">

                    <ul className="ul-header-2">

                        <li className = "sign-links"><Link to = "/sign-in">Sign In</Link></li>
                        <li className = "sign-links"><Link to = "/sign-up">Sign Up</Link></li>

                    </ul>

                </div>

            </header>
            
        </>

    )

}