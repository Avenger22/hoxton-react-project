import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import FavoriteItem from "../../Components/Favorites/FavoriteItem"

import "./Favourites.css"

export default function FavoritesPage(props) {

    const { items, setItems } = props

    function filterTotalIndividual(productId) {
        const array = items.filter(item => item.id === productId)
        return array
    }

    return (

        <>

            <HeaderCommon />

            <section className="basket-container">

                <h2>Your favorites item list</h2>

                <ul>

                    {

                        items.map(product =>

                            <FavoriteItem
                                key={product.id}
                                product={product}
                                filterTotalIndividual={filterTotalIndividual}

                            />

                        )

                    }

                </ul>

            </section>

            <FooterCommon />
        
        </>

    )
    
}