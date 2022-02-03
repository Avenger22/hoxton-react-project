import { Navigate, useNavigate } from "react-router"
import BagItem from "../../Components/Bag/BagItem"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"

import "./Bag.css"

export default function BagPage(props) {

    const { items, setItems, signInStatus, setSignInStatus, signInUserName } = props
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

        let basketCopy = JSON.parse(JSON.stringify(bagItemsFiltered))
        const index = basketCopy.findIndex(target => target.id === objectBasket.id)
        
        const item = basketCopy[index]
        const newItem = { ...item, quantity: parseInt(value)}

        basketCopy[index] = newItem
        setItems(basketCopy)

    }

    function filterTotalIndividual(productId) {

        const array = bagItemsFiltered.filter(item => item.id === productId)
        return array
        
    }

    console.log("Items", items)
    console.log("BagItems:", bagItemsFiltered)

    return (

        <>

            <HeaderCommon 
                signInStatus={signInStatus}
                setSignInStatus={setSignInStatus}
                signInUserName={signInUserName}
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
                            />

                        )

                    }

                </ul>

                <h3>Your total: {calculateTotalBasket(bagItemsFiltered)}</h3>
                <button onClick={handlePaymentRedirect}>Proceed to payment</button>

            </section>

            <FooterCommon />
      
        </>

    )
    
}