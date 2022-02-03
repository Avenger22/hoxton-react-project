import "./Blog.css"

import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import BlogContainer1 from "../../Components/Blog/BlogContainer1/BlogContainer1"
import BlogContainer2 from "../../Components/Blog/BlogContainer2/BlogContainer2"
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'

function Blog({signInStatus, setSignInStatus, signInUserName}) {

    return (

        <>

            <ButtonTop />
            
            <BlogContainer1 
                signInStatus={signInStatus}
                signInUserName={signInUserName}
                setSignInStatus={setSignInStatus}
            />

            <BlogContainer2 />

            <FooterCommon />

        </>

    )

}

export default Blog