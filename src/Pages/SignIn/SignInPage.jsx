import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import HeaderCommon from '../../Components/Common/HeaderCommon/HeaderCommon'
import './SignIn.css'

export default function SignInPage() {

    return (

        <>

            <HeaderCommon />
        
            <section className="container-login">

                <form className="form-login">

                    <div className="container-form">

                        <h1>Sign In</h1>

                        <label>
                            <span>Email : </span>
                            <input required name="email" type="email" placeholder="Enter your email adress: " />
                        </label>

                        <label>
                            <span>Password</span>
                            <input required name="password" type="password" placeholder="Enter your password: " />
                        </label>

                        <button type="submit" value="Submit">
                            Sign In
                        </button>

                        <p>If you don't have an account, sign up here !</p>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}