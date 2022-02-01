import { useNavigate } from "react-router"
import "../StoreItem/StoreItem.css"

function StoreItem({item}) {

    const navigate = useNavigate()

    function handleLiClickItem() {
        navigate(`/products/${item.id}`)
    }

    return (

        <>
        
            <li className="store-item" onClick={handleLiClickItem}>

                <span className="new-item-date">New Item</span>
                <img src={item.image} alt=""/>
                <h2>{item.name}</h2>

                <div className="span-wrapper-item">
                    <span className="span-1">Price: {item.price}</span>
                    <span className="span-2">Discount Price: {item.discountPrice}</span>
                    <span className="span-3-item">Stock: {item.stock}</span>
                    <span className="span-4-item">Type: {item.type}</span>
                </div>

                <button>Add to cart</button>
                
            </li>
            
        </>

    )

}

export default StoreItem