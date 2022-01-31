import "../ContactContainer3/ContactContainer3.css"

export default function ContactContainer3() {

    return (

        <>
        
            <section className="contact-container-3" id="contact-container-3">

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

        </>

    )
    
}