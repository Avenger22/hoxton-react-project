import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"

import "./Payment.css"

export default function PaymentPage() {

    return (

        <>

            <HeaderCommon />
        
            <section className="container-payment">

                <form className="form-payment">

                    <div className="container-form-payment">

                        <h1>Payment details checkout</h1>

                        <label>
                            <span>Full name : </span>
                            <input required name="fullname" type="text" placeholder="Enter your full name : " />
                        </label>

                        <label>
                            <span>Address : </span>
                            <input required name="address" type="text" placeholder="Enter your address: " />
                        </label>

                        <label>
                            <span>Email: </span>
                            <input required name="email" type="email" placeholder="Enter your email: " />
                        </label>

                        <label>
                            <span>Zip code: </span>
                            <input required name="zip" type="password" placeholder="Enter your zip code: " />
                        </label>

                        <button type="submit" value="Submit">
                            Proceed to checkout
                        </button>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}