import HeaderCommon from "../../Common/HeaderCommon/HeaderCommon"
import "../AboutUsContainer1/AboutUsContainer1.css"

export default function AboutUsContainer1({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>
        
            <section className="about-container-1" id="about-container-1">

                <HeaderCommon 
                    signInStatus={signInStatus}
                    setSignInStatus={setSignInStatus}
                    signInUserName={signInUserName}
                />

                <main className="main">

                    <div className="main-post">
                        
                        <h1>About</h1>
                        <h2>Us</h2>

                        <p>
                            We look forward to helping you achieve your health and fitness goals.
                        </p>

                    </div>

                </main>

            </section>

        </>

    )

}