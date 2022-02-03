import "./Contact.css"

import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import ContactContainer1 from "../../Components/Contact/ContactContainer1/ContactContainer1"
import ContactContainer2 from "../../Components/Contact/ContactContainer2/ContactContainer2"
import ContactContainer3 from "../../Components/Contact/ContactContainer3/ContactContainer3"
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'

function Contact({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>

            <ButtonTop />
            
            <ContactContainer1 
                signInStatus={signInStatus}
                signInUserName={signInUserName}
                setSignInStatus={setSignInStatus}
            />

            <ContactContainer2 />
        
            <ContactContainer3 />

            <FooterCommon />

        </>

    )

}

export default Contact