import HomeContainer8Article from "./HomeContainer8Article"
import './HomeContainer8.css'

import { useState } from "react"
import { useEffect } from "react"

export default function HomeContainer8() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/articles`)
            .then(resp => resp.json())
            .then(articlesFromServer => setArticles(articlesFromServer))
    }, [])

    return (

        <>
        
            <section className="home-container-8" id="home-container-8">

                <div className="blog-header">
                    <h4>Latest Posts</h4>
                    <span>Latest news and information about fitness world.</span>
                </div>

                <div className="blog-wrapper">

                    {

                        articles.map(article =>
                            
                            <HomeContainer8Article 
                                key = {article.id}
                                article = {article}
                            />

                        )

                    }

                </div>

            </section>

        </>

    )

}