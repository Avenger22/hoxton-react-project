import HeaderCommon from "../Common/HeaderCommon/HeaderCommon";

export default function Error404Container1({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>
        
            <section className="error-container-1" id="error-container-1">

                <HeaderCommon 
                    signInStatus={signInStatus}
                    setSignInStatus={setSignInStatus}
                    signInUserName={signInUserName}
                />

                <main className="main">

                    <div className="main-post">
                        <h1>ERROR</h1>
                        <h2>404</h2>
                    </div>

                </main>

            </section>

        </>

    )

}