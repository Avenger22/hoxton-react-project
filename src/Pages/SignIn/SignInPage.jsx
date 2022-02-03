import { useState } from 'react'
import { Link } from 'react-router-dom'
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import HeaderCommon from '../../Components/Common/HeaderCommon/HeaderCommon'

import './SignIn.css'

export default function SignInPage({signInData, setSignInData, signInStatus, setSignInStatus, signInUserName, setSignInUserName}) {
    
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    function handleUserNameChange(e) {

        const newObject = {name: e.target.value}
        setUserName(e.target.value)
        setSignInUserName(newObject)
        
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleFormSubmit(e) {

        const array = [
            {
                userName: userName, 
                password: password
            }
        ]
        
        const newArray = [...signInData, array]

        // update the server
        fetch(`http://localhost:8000/users/${signInUserName.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ signedIn: !signInStatus })
        })

        setSignInStatus(!signInStatus)
        setSignInData(newArray)

    }

    return (

        <>

            <HeaderCommon 
                signInStatus={signInStatus}
                setSignInStatus={setSignInStatus}
                signInUserName={signInUserName}
            />
        
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

                            <span>UserName : </span>
                            <input 
                                defaultValue = {userName} 
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

                        <p>If you don't have an account, <Link to = {'/sign-up'}>sign up here</Link> !</p>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}