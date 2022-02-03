import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"

import "./Payment.css"
import { useState } from "react";

export default function PaymentPage({paymentData, setPaymentData, paymentStatus, setPaymentStatus}) {

    const [address, setAddress] = useState('')
    const [fullName, setFullName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleZipCodeChange(e) {
        setZipCode(e.target.value)
    }

    function handleAddressChange(e) {
        setAddress(e.target.value)
    }

    function handleFullNameChange(e) {
        setFullName(e.target.value)
    }

    function handleFormSubmit(e) {

        const array = [
            {
                email: email, 
                zipCode: zipCode,
                address: address,
                fullName: fullName
            }
        ]

        const newArray = [...paymentData, array]

        setPaymentStatus(!paymentStatus)
        setPaymentData(newArray)

    }

    return (

        <>
        
            <section className="container-payment">

                <form 
                    className="form-payment"
                    onSubmit={function (e) {
                        e.preventDefault()
                        handleFormSubmit(e)
                    }}
                >

                    <div className="container-form-payment">

                        <h1>Payment details checkout</h1>

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

                            <span>Address : </span>
                            <input 
                                required 
                                name="address" 
                                type="text" 
                                placeholder="Enter your address: "
                                onChange={function (e) {
                                    handleAddressChange(e)
                                }} 
                            />
                        
                        </label>

                        <label>

                            <span>Email: </span>
                            <input 
                                required 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email: " 
                                onChange={function (e) {
                                    handleEmailChange(e)
                                }}
                            />

                        </label>

                        <label>

                            <span>Zip code: </span>
                            <input 
                                required 
                                name="zip" 
                                type="text"
                                placeholder="Enter your zip code: " 
                                onChange={function (e) {
                                    handleZipCodeChange(e)
                                }}
                            />

                        </label>

                        <button type="submit" value="Submit">
                            Proceed to checkout
                        </button>

                    </div>

                </form>

            </section>
            
        </>

    )
    
}