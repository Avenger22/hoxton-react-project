import { useState } from "react"
import { useNavigate } from "react-router"
import Heart from "react-heart"

function FavoriteItem(props) {

    const {product, filterTotalIndividual, handleButtonRemoveFavorite, handleButtonAddBagRemoveFavorite} = props 
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

                <button 
                    onClick={handleRedirectBack}>
                    Go to products
                </button>

                <button onClick={function () {
                    handleButtonAddBagRemoveFavorite(product)
                }}>
                    Add this to Bag
                </button>

                <button onClick={function () {
                    handleButtonRemoveFavorite(product)
                }}>
                    X
                </button>


            </article>

        </li>

    )

}

export default FavoriteItem