import { useNavigate } from "react-router"
import { useStore } from "../../zustand/store"

function FavoriteItem({product}) {

    const {handleButtonAddBagRemoveFavorite, handleButtonRemoveFavorite} = useStore()

    // const totalIndividualArray = filterTotalIndividual(product.id)

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
                    navigate('/bag')
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