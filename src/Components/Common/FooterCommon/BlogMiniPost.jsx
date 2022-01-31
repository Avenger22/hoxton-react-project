import { Link } from "react-router-dom";

export default function BlogMiniPost({post}) {

    return (

        <>
            <div className="blogs-mini-post">
                
                <Link to= {`/blog/${post.id}`}>
                    <img src = {post.image} alt=""/>
                </Link> 
                
                <span>
                    <Link to = {`/blog/${post.id}`}>{post.desc}</Link>
                </span>
            
            </div>
        
        </>

    )

}