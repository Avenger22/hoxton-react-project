import HeaderCommon from "../../Common/HeaderCommon/HeaderCommon";
import "../BlogContainer1/BlogContainer1.css"

export default function BlogContainer1({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>
        
            <section className="blog-container-1" id="blog-container-1">

                <HeaderCommon 
                    signInStatus={signInStatus}
                    setSignInStatus={setSignInStatus}
                    signInUserName={signInUserName}
                />

                <main className="main">

                    <div className="main-post">
                        <h1>Our</h1>
                        <h2>Blog</h2>
                        <p>Here you can get the latest news about fitness world</p>
                    </div>

                </main>

            </section>

        </>

    )
    
}