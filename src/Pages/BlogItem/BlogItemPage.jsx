import "./BlogItem.css"
import { useEffect, useState } from 'react'

import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'
import BlogItemContainer1 from '../../Components/BlogItem/BlogItemContainer1/BlogItemContainer1'
import BlogItemContainer2 from '../../Components/BlogItem/BlogItemContainer2/BlogItemContainer2'

import { useParams } from "react-router-dom"

function BlogItem(props) {

    const params = useParams()
    const [blogItem, setBlogItem] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/articles/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setBlogItem(productFromServer))
    }, [])

    if (blogItem === null) {
        return <main>Loading...</main>
    }

    if (blogItem.title === undefined) {
        return <main>Blog Article not found</main>
    }

    return (

        <>

            <BlogItemContainer1 
                blogItem = {blogItem}
                setBlogItem = {setBlogItem}
            />

            <BlogItemContainer2 />
        
        </>

    )

}

export default BlogItem