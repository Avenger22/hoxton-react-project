import { Link, useNavigate } from "react-router-dom";
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
                        
                        <li><Link to = "/home">Home</Link></li>
                        <li><Link to = "/about-us">About Us</Link></li>

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
                        
                        <li><Link to = "/teams">Our Team</Link></li>
                        <li><Link to = "/blog">Blog</Link></li>
                        <li><Link to = "/products">Products</Link></li>
                        <li><Link to = "/contact">Contact</Link></li>
                    
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