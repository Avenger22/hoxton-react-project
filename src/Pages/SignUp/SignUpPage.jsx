import { useState } from "react";
import { Link } from "react-router-dom";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./SignUp.css"

export default function SignUpPage({signUpData, setSignUpData, signUpStatus, setSignUpStatus}) {

    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleUserNameChange(e) {
        setUserName(e.target.value)
    }

    function handleFullNameChange(e) {
        setFullName(e.target.value)
    }

    function handleFormSubmit(e) {

        const array = [
            {
                email: email, 
                password: password,
                userName: userName,
                fullName: fullName
            }
        ]

        const newArray = [...signUpData, array]

        setSignUpStatus(!signUpStatus)
        setSignUpData(newArray)

    }
    
    return (

        <>
        
            <section className="container-register">

                <form 
                    className="form-register"
                    onSubmit={function (e) {
                        e.preventDefault()
                        handleFormSubmit(e)
                    }}
                >

                    <div className="container-form-register">

                        <h1>Sign Up</h1>

                        <label>

                            <span>Full name : </span>
                            <input 
                                required 
                                name="fullname" 
                                type="text" 
                                placeholder="Enter your full name : " 
                                onChange={function (e) {
                                    handleFullNameChange(e)
                                }}
                            />
                        
                        </label>

                        <label>

                            <span>Username : </span>
                            <input 
                                required 
                                name="username" 
                                type="text" 
                                placeholder="Enter your username: " 
                                onChange={function (e) {
                                    handleUserNameChange(e)
                                }}
                            />
                        
                        </label>

                        <label>

                            <span>Email : </span>
                            <input 
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
                            Sign Up
                        </button>

                        <p>Already have an account, <Link to = "/signIn">sign in here</Link> !</p>

                    </div>

                </form>

            </section>
            
        </>

    )
    
}