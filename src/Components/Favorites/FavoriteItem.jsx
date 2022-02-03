import { useState } from "react"
import { useNavigate } from "react-router"
import Heart from "react-heart"

function FavoriteItem(props) {

    const {product, filterTotalIndividual, handleButtonAddFavorite, active, setActive} = props 
    const totalIndividualArray = filterTotalIndividual(product.id)

    const navigate = useNavigate()

    function handleRedirectBack() {
        navigate(`/products`)
    }

    return (

        <li>

            <article className="favorites-container__item">

                <img
                    src = {product.image}
                    alt = {product.description}
                    width="90"
                />

                <p>{product.name}</p>

                <button onClick={handleRedirectBack}>Go to products</button>
                {/* <button onClick={handleRedirectBack}>Remove from Wishlist</button> */}

                {/* <i className="icon-heart-empty"></i> */}

                {/* <Heart 
                    isActive={active}
                    style = {{height: 25, width: 35}} 
                    onClick={function () { 
                        setActive(!active)
                        handleButtonAddFavorite(product)
                    }}
                /> */}

            </article>

        </li>

    )

}

export default FavoriteItem