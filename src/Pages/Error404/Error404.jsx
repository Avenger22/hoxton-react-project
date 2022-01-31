import "../Error404/Error404.css"
import {Link} from 'react-router-dom'

function Error404() {

    return (

        <>

            <a className="back-to-top" href="#top"><img src="/assets/images/logos/arrow-up.png" alt=""/></a>
    
            <section className="container-1" id="container-1">

                <header className="header">

                    <div className="header-group-1">
                        
                        <ul className="ul-header-1">
                            <li id="special-logo"><Link to="*">AlbVitaFitness</Link></li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>

                    </div>

                    <div className="header-group-2">
                        <ul className="ul-header-2">
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><button>Chose a plan</button></li>
                        </ul>
                    </div>

                </header>

                <main className="main">

                    <div className="main-post">
                        <h1>ERROR</h1>
                        <h2>404</h2>
                    </div>

                </main>

            </section>

            <footer className="container-9" id="container-9">

                <div className="footer-group-1">

                    <h5>AlbFitness</h5>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <div className="footer-icons">
                        <span>Follow Us:</span>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-facebook"></i>
                    </div>

                    <div className="footer-form">
                        <input type="email" placeholder="Email: "/>
                        <button>
                            <span>Subscribe</span>
                        </button>
                    </div>

                </div>
                
                <div className="footer-group-2">
                    <h5>Blogs</h5>
                    <div className="blogs-mini">

                        <div className="blogs-mini-post">
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi accusantium, nostrum iusto ullam culpa!</span>
                        </div>

                        <div className="blogs-mini-post">
                            <img src="/assets/images/main/background.jpg" alt=""/>  
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi accusantium, nostrum iusto ullam culpa!</span>
                        </div>

                        <div className="blogs-mini-post">
                            <img src="/assets/images/main/background.jpg" alt=""/>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi accusantium, nostrum iusto ullam culpa!</span>
                        </div>

                    </div>
                </div>

                <div className="footer-group-3">
                    <h5>Instagram</h5>

                    <div className="row-wrapper">

                        <div className="row">
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <img src="/assets/images/main/background.jpg" alt=""/>  
                        </div>

                        <div className="row">
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                        </div>

                        <div className="row">
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <img src="/assets/images/main/background.jpg" alt=""/> 
                            <img src="/assets/images/main/background.jpg" alt=""/>  
                        </div>
                    
                    </div>

                    <a href="#">View more blog posts</a>

                </div>

            </footer>
            
        </>

    )

}

export default Error404