
import Form from '../Header/Form'
import {Link} from 'react-router-dom'

function ProductsHeader() {

    return (

        <>

            <header className="header-menu">
                    
                    <div className="header-sub-1">
                        
                        <ul className="ul-sub-1">
                            
                            <li id="logo">
                                <Link to="/products">AlbVitaFitness</Link>
                            </li>
                            
                            <Form />

                            <button className="button-image">
                                <img src="./assets/icons/user.png" alt=""/>
                                <span className="span-user-login null"></span>
                            </button>
                                        
                            <button className="button-image">
                                <img src="./assets/icons/shopping-bag.png" alt=""/>
                                <span className="span-bag-stock null"></span>
                            </button>
                            
                        </ul>
                            
                    </div>
                        
                    <div className="header-sub-2">
                                    
                        <ul className="ul-sub-2">
                            
                            <li>
                                <Link to="/home">Home</Link>
                            </li>

                            <li>
                                <Link to="/products">Products</Link>
                            </li>

                            <li>
                                <a href="">Offers</a>
                            </li>

                            <li>
                                <a href="">About Us</a>
                            </li>
                            
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                    
            </header>

        </>

    )

}

export default ProductsHeader