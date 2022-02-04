import FavoriteItem from "../../Components/Favorites/FavoriteItem"
import "./Favorites.css"

import ProductsFooter from "../../Components/Products/Footer/ProductsFooter"
import ProductsHeader from "../../Components/Products/Header/ProductsHeader/ProductsHeader"

export default function FavoritesPage(props) {

    const { items, setItems, signInStatus, signInUserName, 
        setSignInStatus, handleButtonRemoveFavorite, handleButtonAddBagRemoveFavorite,
        selectedModal, setSelectedModal, searchTerm, setSearchTerm, searchOnCategory,
        setSearchOnCategory, userName, setUserName, userCatcher,
        setUserCatcher, setCategory, bagClickSpan, favoriteClickSpan} = props

    console.log(items)
    const favoriteItemsFiltered = items.filter(item => item?.favorite === true)

    function filterTotalIndividual(productId) {
        const array = favoriteItemsFiltered.filter(item => item.id === productId)
        return array
    }

    return (

        <>

            <div className="fav-menus-wrapper">

                <ProductsHeader 
                    selectedModal = {selectedModal}
                    setSelectedModal = {setSelectedModal}

                    searchTerm = {searchTerm}
                    setSearchTerm = {setSearchTerm}

                    searchOnCategory = {searchOnCategory}
                    setSearchOnCategory = {setSearchOnCategory}

                    userName = {userName}
                    setUserName = {setUserName}

                    userCatcher = {userCatcher}
                    setUserCatcher = {setUserCatcher}
                    setCategory = {setCategory}

                    signInUserName = {signInUserName}
                    signInStatus = {signInStatus}
                    setSignInStatus = {setSignInStatus}

                    bagClickSpan = {bagClickSpan}
                    favoriteClickSpan = {favoriteClickSpan}
                />

                <section className="favorites-container">

                    <h2>Your favorites items list</h2>
                    <h2>Your Wishlist</h2>

                    <ul>

                        {

                            favoriteItemsFiltered.map(product =>

                                <FavoriteItem
                                    key={product.id}
                                    product={product}
                                    filterTotalIndividual={filterTotalIndividual}
                                    
                                    handleButtonRemoveFavorite = {handleButtonRemoveFavorite}
                                    handleButtonAddBagRemoveFavorite = {handleButtonAddBagRemoveFavorite}
                                />

                            )

                        }

                    </ul>

                </section>

                <ProductsFooter />

            </div>
        
        </>

    )
    
}