import { useState } from 'react'
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import HeaderCommon from '../../Components/Common/HeaderCommon/HeaderCommon'

import './SignIn.css'

export default function SignInPage({signInData, setSignInData, signInStatus, setSignInStatus}) {
    
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleFormSubmit(e) {

        const array = [
            {
                email: email, 
                password: password
            }
        ]
        
        const newArray = [...signInData, array]

        setSignInStatus(!signInStatus)
        setSignInData(newArray)

    }

    return (

        <>

            <HeaderCommon />
        
            <section className="container-login">

                <form className="form-login" 
                    onSubmit={function (e) {
                        e.preventDefault()
                        handleFormSubmit(e)
                    }}
                >

                    <div className="container-form">

                        <h1>Sign In</h1>

                        <label>

                            <span>Email : </span>
                            <input 
                                defaultValue = {email} 
                                required 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email adress: " 
                                onChange={function (e) {
                                    handleEmailChange(e)
                                }}
                            />

                        </label>

                        <label>

                            <span>Password</span>
                            <input
                                defaultValue={password} 
                                required 
                                name="password" 
                                type="password" 
                                placeholder="Enter your password: "
                                onChange={function (e) {
                                    handlePasswordChange(e)
                                }} 
                            />
                        
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