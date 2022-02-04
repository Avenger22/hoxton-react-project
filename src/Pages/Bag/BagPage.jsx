import {useNavigate } from "react-router"
import BagItem from "../../Components/Bag/BagItem"
import ProductsFooter from "../../Components/Products/Footer/ProductsFooter"
import ProductsHeader from "../../Components/Products/Header/ProductsHeader/ProductsHeader"
import "./Bag.css"

export default function BagPage(props) {

    const { items, setItems, signInStatus, setSignInStatus, 
        signInUserName, handleButtonRemoveBasket, 
        selectedModal, searchTerm, setSearchTerm, searchOnCategory,
        setSearchOnCategory, userName, setUserName, userCatcher, setUserCatcher,
        setCategory, setSelectedModal, bagClickSpan, favoriteClickSpan} = props
    
    const bagItemsFiltered = items.filter(item => item?.quantity > 0)

    function calculateTotalBasket(baskedProductsParam) {

        let total = 0

        for (const product of baskedProductsParam) {
            total += Number(product.price) * Number(product.quantity)
        }

        return total.toFixed(2)

    }

    const navigate = useNavigate()

    function handlePaymentRedirect() {
        navigate('/payment')
    }

    function handleOnChangeSelect(value, objectBasket) {
        
        let productsCopy = JSON.parse(JSON.stringify(items))
        const index = productsCopy.findIndex(target => target.id === objectBasket.id)

        const item = productsCopy[index]

        if (parseInt(value) <= item.stock) {
            
            // stock: item.stock - item.quantity

            const newItem = { ...item, quantity: parseInt(value) }
            productsCopy[index] = newItem
            setItems(productsCopy)

        }

        else {

            alert("You cannot have more than the stock of the item")

            // value = "1"
            // stock: item.stock - item.quantity
            
            const newItem = { ...item, quantity: 1 }
            productsCopy[index] = newItem
            setItems(productsCopy)

        }

    }

    function filterTotalIndividual(productId) {

        const array = bagItemsFiltered.filter(item => item.id === productId)
        return array
        
    }

    console.log("Items", items)
    console.log("BagItems:", bagItemsFiltered)

    return (

        <>

            <div className="bag-menus-wrapper">

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

                <section className="basket-container">

                    <h2>Your Shopping Bag</h2>

                    <ul>

                        {

                            bagItemsFiltered.map(product =>

                                <BagItem
                                    key={product.id}
                                
                                    product={product}
                                    calculateTotalBasket={calculateTotalBasket}
                                    
                                    filterTotalIndividual={filterTotalIndividual}
                                    handleOnChangeSelect={handleOnChangeSelect}
                                    handleButtonRemoveBasket = {handleButtonRemoveBasket}
                                />

                            )

                        }

                    </ul>

                    <h3>Your total: {calculateTotalBasket(bagItemsFiltered)}</h3>

                    <button className="button-proceed-payment" 
                        onClick={handlePaymentRedirect}>
                            Proceed to payment
                    </button>

                </section>

                <ProductsFooter />

            </div>
      
        </>

    )
    
}