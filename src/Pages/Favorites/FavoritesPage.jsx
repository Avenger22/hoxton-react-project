import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import FavoriteItem from "../../Components/Favorites/FavoriteItem"

import "./Favorites.css"

export default function FavoritesPage(props) {

    const { items, setItems, signInStatus, signInUserName, 
        setSignInStatus, handleButtonAddFavorite, active, setActive} = props

    console.log(items)
    const favoriteItemsFiltered = items.filter(item => item?.favorite === true)

    function filterTotalIndividual(productId) {
        const array = favoriteItemsFiltered.filter(item => item.id === productId)
        return array
    }

    return (

        <>

            <HeaderCommon 
                signInStatus={signInStatus}
                signInUserName={signInUserName}
                setSignInStatus={setSignInStatus}
            />

            <section className="favorites-container">

                <h2>Your favorites item list</h2>

                <ul>

                    {

                        favoriteItemsFiltered.map(product =>

                            <FavoriteItem
                                key={product.id}
                                product={product}
                                filterTotalIndividual={filterTotalIndividual}

                                handleButtonAddFavorite = {handleButtonAddFavorite}
                                active = {active}
                                setActive = {setActive}
                                
                            />

                        )

                    }

                </ul>

            </section>

            <FooterCommon />
        
        </>

    )
    
}