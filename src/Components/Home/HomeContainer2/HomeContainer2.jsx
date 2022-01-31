import '../HomeContainer2/HomeContainer2.css'

export default function HomeContainer2() {

    return (

        <>
        
            <section className="home-container-2" id="home-container-2">

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

        </>

    )

}