import BagItem from "../../Components/Bag/BagItem"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"

import "./Bag.css"

export default function BagPage(props) {

    const { items, setItems } = props

    function calculateTotalBasket(baskedProductsParam) {

        let total = 0

        for (const product of baskedProductsParam) {
            total += Number(product.price) * Number(product.quantity)
        }

        return total.toFixed(2)

    }

    function handleOnChangeSelect(value, objectBasket) {

        let basketCopy = JSON.parse(JSON.stringify(items))
        const index = basketCopy.findIndex(target => target.id === objectBasket.id)
        
        const item = basketCopy[index]
        const newItem = { ...item, quantity: parseInt(value) }

        basketCopy[index] = newItem
        setItems(basketCopy)

    }

    function filterTotalIndividual(productId) {
        const array = items.filter(item => item.id === productId)
        return array
    }

    return (

        <>

            <HeaderCommon />

            <section className="basket-container">

                <h2>Your Shopping Bag</h2>

                <ul>

                    {

                        items.map(product =>

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

                <h3>Your total: {calculateTotalBasket(items)}</h3>

            </section>

            <FooterCommon />
      
        </>

    )
    
}