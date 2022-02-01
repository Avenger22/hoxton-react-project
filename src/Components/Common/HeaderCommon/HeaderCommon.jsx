import { Link } from "react-router-dom";
import '../HeaderCommon/HeaderCommon.css'

export default function HeaderCommon() {

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
                        <li><Link to = "/blog">Blog</Link></li>
                        <li><Link to = "/products">Products</Link></li>
                        <li><Link to = "/contact">Contact</Link></li>
                    
                    </ul>

                </div>

                <div className="void"></div>

                <div className="header-group-2">

                    <ul className="ul-header-2">

                        <li className = "sign-links"><Link to = "/home">Sign In</Link></li>
                        <li className = "sign-links"><Link to = "/home">Sign Up</Link></li>

                    </ul>

                </div>

            </header>
            
        </>

    )

}