import "../Contact/Contact.css"
import {Link} from 'react-router-dom'

function Contact() {

    return (

        <>
          
            <a className="back-to-top" href="#top"><img src="/assets/images/logos/arrow-up.png" alt=""/></a>

            <section className="container-1" id="container-1">

                <header className="header">

                    <div className="header-group-1">
                        <ul className="ul-header-1">
                            <li id="special-logo"><Link to="/contact">AlbVitaFitness</Link></li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>

                    </div>

                    <div className="header-group-2">
                        <ul className="ul-header-2">
                            <li><Link to="/contact">Sign In</Link></li>
                            <li><Link to="/contact">Sign Up</Link></li>
                            <li><button>Chose a plan</button></li>
                        </ul>
                    </div>

                </header>

                <main className="main">

                    <div className="main-post">
                        <h1>Contact</h1>
                        <h2>Us</h2>
                        <p>Lorem Ipsum dolor sit amet, cosnectneur</p>
                        <button>
                            get in touch
                        </button>
                    </div>

                </main>

            </section>

            <section className="container-2" id="container-2">

                <div className="location">
                    <h2>Our Location</h2>
                </div>

                <div className="map-contact">
                    <iframe width="100%" height={600} frameBorder={0} scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2%20Grafton%20Street,%20Dublin,%20Ireland+(AlbFitness)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">gps devices</a></iframe>
                </div>

            </section>
        
            <section className="container-3" id="container-3">

                <div className="contact-group-1">
                    <h2>Contact Information</h2>
                </div>

                <div className="contact-group-2">

                    <div className="form-group-1">
                        <h3>Page Info</h3>
                        <span>Email: info@albfitness.com</span>
                        <span>Contact:+35569 404 6408</span>
                        <span>(405) 379-8024400 Grimes Ave Holdenville, Oklahoma(OK), 74848</span>
                    </div>

                    <form className="form-group-2">
                        <input type="text" placeholder="Name: " required/>
                        <input type="email" placeholder="Email: " required/>
                        <input type="text" placeholder="Subject: " required/>
                        <input type="phone" placeholder="Phone: " required/>
                        <textarea name="textarea-contact" id="" cols={50} rows={20} placeholder="How can we help ?"></textarea>
                        <button>
                            Let's Talk
                        </button>
                    </form>

                </div>

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

export default Contact