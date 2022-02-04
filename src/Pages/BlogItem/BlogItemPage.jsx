import "./BlogItem.css"
import { useEffect, useState } from 'react'

import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'
import BlogItemContainer1 from '../../Components/BlogItem/BlogItemContainer1/BlogItemContainer1'
import BlogItemContainer2 from '../../Components/BlogItem/BlogItemContainer2/BlogItemContainer2'
import { useStore } from "../../Store/store"
import { useParams } from "react-router"

function BlogItem() {

    const params = useParams()

    const {blogItem, getIndividualBlogFromServer} = useStore()
    useEffect(getIndividualBlogFromServer(params), [])

    if (blogItem === null) {
        return <main>Loading...</main>
    }

    if (blogItem.title === undefined) {
        return <main>Blog Article not found</main>
    }

    return (

        <>

            <ButtonTop />

            <BlogItemContainer1 />

            <BlogItemContainer2 />
        
            <FooterCommon />

        </>

    )

}

export default BlogItem