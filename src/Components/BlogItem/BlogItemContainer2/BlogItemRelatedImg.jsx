import { Link } from "react-router-dom";

export default function BlogItemRelatedImg({post}) {

    return (

        <>
        
            <Link to={`/blog/${post.id}`}>
                <img src = {post.image} alt=""/>
            </Link>

        </>
    )

}