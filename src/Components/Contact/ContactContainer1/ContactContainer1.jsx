import HeaderCommon from "../../Common/HeaderCommon/HeaderCommon"
import "../ContactContainer1/ContactContainer1.css"

export default function ContactContainer1({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>
        
            <section className="contact-container-1" id="contact-container-1">

                <HeaderCommon 
                    signInStatus={signInStatus}
                    setSignInStatus={setSignInStatus}
                    signInUserName={signInUserName}
                />

                <main className="main">

                    <div className="main-post">

                        <h1>Contact</h1>
                        <h2>Us</h2>
                        <p>If you have any question please free to contact us</p>

                    </div>

                </main>

            </section>

        </>

    )
    
}