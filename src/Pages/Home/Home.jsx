import "../Home/Home.css"
import {Link} from 'react-router-dom'

function Home() {

    return (

        <>

            <a className="back-to-top" href="#top">
                <img src="/assets/images/logos/arrow-up.png" alt=""/>
            </a>

            <input type="checkbox" name="" id="over"/>

            <div className="box-modal">
                <h2>Join our Newsletter</h2>
                <input type="email" name="" placeholder="Email Address" id="input-modal"/>
                <button id="button-modal" type="submit">
                    Submit
                </button>
            </div>

            <label className="close-button" htmlFor="over">
                X
            </label>

            <label htmlFor="over" id="label-modal">
                <div className="background">

                </div>
            </label>


            <section className="container-1" id="container-1">

                <header className="header">

                    <div className="header-group-1">
                        
                        <ul className="ul-header-1">
                            
                            <li id="special-logo">
                                <Link to = "/home">
                                    AlbVitaFitness
                                </Link>
                            </li>
                            
                            <li><Link to = "/home">Home</Link></li>

                            <li className="services-dropdown">

                                <Link to = "/home">Services</Link>

                                <nav>
                                    <h2>Services</h2>

                                    <ul>
                                        <li><Link to = "/home">Yoga</Link></li>
                                        <li><Link to = "/home">Crossfit</Link></li>
                                        <li><Link to = "/home">WeightLifting</Link></li>
                                        <li><Link to = "/home">MMA</Link></li>
                                    </ul>

                                </nav>

                            </li>

                            <li><Link to = "/blog">Blog</Link></li>
                            <li><Link to = "/contact">Contact</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        
                        </ul>

                    </div>

                    <div className="header-group-2">

                        <ul className="ul-header-2">

                            <li><Link to = "/home">Sign In</Link></li>
                            <li><Link to = "/home">Sign Up</Link></li>
                            <li><button>Chose a plan</button></li>

                        </ul>

                    </div>

                </header>

                <main className="main">

                    <div className="main-post">
                        <h1>The Price of Excellence</h1>
                        <h2>is discipline</h2>
                        <p>Sweat in the gym is the guarantee stamp for your health.</p>
                        <button>
                            get in touch
                        </button>
                    </div>

                </main>

            </section>

            <section className="container-2" id="container-2">

                <div className="box">

                    <div className="box-image">
                        <img src="/assets/images/main/promo-1.jpg" alt=""/>
                    </div>

                    <div className="box-header">
                        <h2>Free 7 days</h2>
                        <h2>Online booking</h2>
                    </div>

                    <form className="box-form">
                        <input type="text" placeholder="Name: " required/>
                        <input type="text" placeholder="Phone: " required/>
                        <input type="text" placeholder="Email: " required/>
                        <input type="text" placeholder="3 People: " required/>
                        <input type="date" placeholder="" required/>
                        <input type="time" placeholder="" required/>
                    </form>

                    <div className="box-button">
                        <button>
                            Get in touch
                        </button>
                    </div>

                </div>

            </section>
        
            <section className="container-3" id="container-3">

                <div className="box-2">

                    <div className="text-box-1">
                        <h3>WELCOME TO ALBFITNESS</h3>
                        <p>A very well said quote ‘Health is wealth’. The healthy you will be the more active you will be. It is not money that can bring comfort to your body, it is all how to treat your body brings all kind of ease as well as comfort. Health is said to be wealth because ‘if money is lost, something is lost but if health is lost, it is everything you lost’. So, always be healthy and fit first. When we are healthy, we are able of doing anything, we feel energetic and a kind of positivity automatically rules our brain. But when we are sick, we need help and feel powerless. To maintain our body stamina and strength it is very necessary to be healthy and fit.</p>
                        <p>Always have fresh fruits and vegetables. Instead of sticking to hotels and street food, try to eat homemade food. Although nowadays people are very health conscious, many of us do not take it seriously. Discipline is very important in our life, either it is education or health. We must follow a proper diet and healthy routines to stay fit. We should include yoga, an exercise in our daily routine. Yoga is helpful in many ways. It is good for your body health, mental health, maintains your skin quality, makes you look young, adds energy, etc. The benefits have a long list. So, have nutritious food, follow some exercise or yoga, and live a healthy life.</p>
                        <div className="btn-box">
                            <button>Contact Us</button>
                        </div>
                    </div>

                    <div className="image-box-1">
                        <img src="/assets/images/main/image-section.jpg" alt=""/>
                    </div>

                </div>

            </section>

            <section className="container-4" id="container-4">

                <div className="text-box-2">
                    <h4>Our Services</h4>
                    <p>Here are some of the services that we offer in a wide range of things</p>
                </div>

                <div className="cards">

                    <div className="card">
                        <img src="/assets/images/main/foto-5.jpg" alt=""/>
                        <h5>Basic Crossfit</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <button>See more</button>
                    </div>

                    <div className="card">
                        <img src="/assets/images/main/foto-6.jpg" alt=""/>
                        <h5>Fitness Studio</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <button>See more</button>
                    </div>

                    <div className="card">
                        <img src="/assets/images/main/foto-2.jpg" alt=""/>
                        <h5>Yoga Classes</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <button>See more</button>
                    </div>

                </div>

            </section>
        
            <section className="container-5" id="container-5">

                <div className="header-wrapper">
                    <h4>You will train with a</h4>
                    <h5>Personal Trainer</h5>
                    <button>
                        Try It
                    </button>
                </div>

            </section>

            <section className="container-6" id="container-6">

                <div className="text-box-3">
                    <h4>Our Team</h4>
                    <p>Meet our amazing staff wich you will work with everyday to achieve your goals</p>
                </div>

                <div className="cards-2">

                    <div className="card-2">
                        <img src="/assets/images/main/foto-1.jpg" alt=""/>
                        <h5>Ana Gonzalez</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <a href="#">See more</a>
                    </div>

                    <div className="card-2">
                        <img src="/assets/images/main/foto-3.jpg" alt=""/>
                        <h5>John Mitt</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <a href="#">See more</a>
                    </div>

                    <div className="card-2">
                        <img src="/assets/images/main/foto-4.jpg" alt=""/>
                        <h5>John Mitt</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <a href="#">See more</a>
                    </div>

                    <div className="card-2">
                        <img src="/assets/images/main/foto-5.jpg" alt=""/>
                        <h5>Billy Froster</h5>
                        <p>Our Staff includes staff thas has on developing great customers and making them feel valued and working during gym time.</p>
                        <a href="#">See more</a>
                    </div>

                </div>

            </section>
        
            <section className="container-7" id="container-7">

                <div className="newsletter-wrapper">

                    <div className="newsletter-header">
                    <h4>Newsletter Signup</h4>
                    </div>

                    <div className="newsletter-search">
                        <input type="email" placeholder="abcd@example.com"/>
                        <button>
                            <span>Sign</span>
                            <span>Up</span>
                        </button>
                    </div>

                </div>

            </section>

            <section className="container-8" id="container-8">

                <div className="blog-header">
                    <h4>Latest Posts</h4>
                    <span>Latest news and information about fitness world.</span>
                </div>

                <div className="blog-wrapper">

                    <div className="blog-article">
                        <img src="/assets/images/main/blogu-4.jpg" alt=""/>
                        <h5>Wich comes first todo cardio or weight lifting ?</h5>
                        <span>AlbFitness</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum obcaecati eum ipsam vel nihil corporis illo atque, natus porro.</p>
                        <span>30 October 2021</span>
                    </div>

                    <div className="blog-article">
                        <img src="/assets/images/main/blogu-4.jpg" alt=""/>
                        <h5>Wich comes first todo cardio or weight lifting ?</h5>
                        <span>AlbFitness</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum obcaecati eum ipsam vel nihil corporis illo atque, natus porro.</p>
                        <span>30 October 2021</span>
                    </div>

                    <div className="blog-article">
                        <img src="/assets/images/main/blogu-4.jpg" alt=""/>
                        <h5>Wich comes first todo cardio or weight lifting ?</h5>
                        <span>AlbFitness</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum obcaecati eum ipsam vel nihil corporis illo atque, natus porro.</p>
                        <span>30 October 2021</span>
                    </div>

                    <div className="blog-article">
                        <img src="/assets/images/main/blogu-4.jpg" alt=""/>
                        <h5>Wich comes first todo cardio or weight lifting ?</h5>
                        <span>AlbFitness</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum obcaecati eum ipsam vel nihil corporis illo atque, natus porro.</p>
                        <span>30 October 2021</span>
                    </div>

                </div>

            </section>

            <section className="container-10" id="container-10">

                <div className="companies-header">
                    <h3>Our Partners and their review</h3>
                </div>

                <div className="companies"> 

                    <div className="company">
                        <img src="/assets/images/logos/transparent.png" alt=""/>
                        <span>We are very happy with their services, the price is the best in the market also great facilities.</span>
                        <span className="company-span">Tirana MMA Center - Akademia e arteve marciale</span>
                    </div>

                    <div className="company">
                        <img src="/assets/images/logos/transparent.png" alt=""/>
                        <span>We are very happy with their services, the price is the best in the market also great facilities.</span>
                        <span className="company-span">Tirana MMA Center - Akademia e arteve marciale</span>
                    </div>

                    <div className="company">
                        <img src="/assets/images/logos/transparent.png" alt=""/>
                        <span>We are very happy with their services, the price is the best in the market also great facilities.</span>
                        <span className="company-span">Tirana MMA Center - Akademia e arteve marciale</span>
                    </div>

                </div>

                <div className="offer">
                    <h4>This month we offer 20% discount offer for those who register in our gym in these month, so hurry up and register !</h4>
                    <button>
                        <span>More</span>
                        <span>Offers</span>
                    </button>
                </div>

            </section>
            
            <footer className="container-9" id="container-9">

                <div className="footer-group-1">

                    <h5>AlbFitness</h5>
                    <p>"A very well said quote ‘Health is wealth’. The healthy you will be the more active you will be. It is not money that can bring comfort to your body, it is all how to treat your body brings all kind of ease as well as comfort. Health is said to be wealth because ‘if money is lost, something is lost but if health is lost, it is everything you lost’. So, always be healthy and fit first"</p>
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
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                        </div>

                        <div className="row">
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                        </div>

                        <div className="row">
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                            <img src="./assets/images/main/background.jpg" alt=""/> 
                        </div>
                    
                    </div>

                    <a href="#">View more blog posts</a>

                </div>

            </footer>

        </>

    )

}

export default Home