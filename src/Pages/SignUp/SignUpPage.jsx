import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./SignUp.css"

export default function SignUpPage() {

    return (

        <>

            <HeaderCommon />
        
            <section className="container-register">

                <form className="form-register">

                    <div className="container-form-register">

                        <h1>Sign Up</h1>

                        <label>
                            <span>Full name : </span>
                            <input required name="fullname" type="text" placeholder="Enter your full name : " />
                        </label>

                        <label>
                            <span>Username : </span>
                            <input required name="username" type="text" placeholder="Enter your username: " />
                        </label>

                        <label>
                            <span>Email : </span>
                            <input required name="email" type="email" placeholder="Enter your email adress: " />
                        </label>

                        <label>
                            <span>Password</span>
                            <input required name="password" type="password" placeholder="Enter your password: " />
                        </label>

                        <button type="submit" value="Submit">
                            Sign Up
                        </button>

                        <p>Already have an account, sign in here !</p>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}