import { useNavigate } from "react-router"
import "../StoreItem/StoreItem.css"

function StoreItem({item}) {

    const navigate = useNavigate()

    function handleLiClickItem() {
        navigate(`/products/${item.id}`)
    }

    function handleRedirectTobag() {
        navigate('/bag')
    }

    const date1 = Date.parse('2021/10/1')
    const date2 = Date.parse(item.date)
    const checkingDate = date2 > date1

    return (

        <>
        
            <li 
                className = {checkingDate ? "store-item" : "store-item-no-date"} 
                onClick={handleLiClickItem}
            >

                {checkingDate ? (

                    <span className = "new-item-date">
                        New Item
                    </span>

                ) :null}

                <img src={item.image} alt=""/>
                <h2>{item.name}</h2>

                <div className="span-wrapper-item">

                    <span className = {item.discountPrice === undefined ? "span-1" : "span-1-special" }>
                        Price: {item.price}
                    </span>

                    {item.discountPrice ? (
                    
                        <span className="span-2">
                            Discount Price: {item.discountPrice}
                        </span>
                    
                    ) :null}

                    <span className="span-3-item">
                        Stock: {item.stock}
                    </span>

                    <span className="span-4-item">
                        Type: {item.type}
                    </span>
                
                </div>

                <button onClick={handleRedirectTobag}>
                    Add to cart
                </button>
                
            </li>
            
        </>

    )

}

export default StoreItem