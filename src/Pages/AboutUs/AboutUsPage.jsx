import AboutUsContainer1 from "../../Components/AboutUs/AboutUsContainer1/AboutUsContainer1"
import AboutUsContainer2 from "../../Components/AboutUs/AboutUsContainer2/AboutUsContainer2"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"

export default function AboutUsPage({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>

            <AboutUsContainer1 
                signInStatus = {signInStatus} 
                setSignInStatus = {setSignInStatus} 
                signInUserName = {signInUserName}
            />

            <AboutUsContainer2 />

            <FooterCommon />

        </>

    )

}