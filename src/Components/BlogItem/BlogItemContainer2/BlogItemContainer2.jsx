import { useEffect } from 'react'
import { useState } from 'react'
import '../BlogItemContainer2/BlogItemContainer2.css'
import BlogItemRelatedImg from './BlogItemRelatedImg'

export default function BlogItemContainer2() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/articles`)
            .then(resp => resp.json())
            .then(postsFromServer => setPosts(postsFromServer))
    }, [])
    
    const newPosts = posts.slice(0,3)

    return (

        <>

            <section className="blog-item-container-2" id="blog-item-container-2">

                <div className="share-wrapper">

                    <div className="share-header">
                        <h4>Share This Article</h4>
                    </div>

                    <div className="share-icons">
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-youtube"></i></a>
                    </div>

                </div>

                <div className="photo-menu-wrapper">

                    <div className="photo-header">
                        <h5>Related Posts</h5>
                    </div>

                    <div className="photo-items">

                        {

                            newPosts.map(post => 
                                
                                <BlogItemRelatedImg 
                                    key = {post.id}
                                    post = {post}
                                />
                                
                            )

                        }

                    </div>

                </div>

            </section>
            
        </>

    )

}