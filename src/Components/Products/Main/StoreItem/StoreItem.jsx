import { useNavigate } from "react-router"
import "../StoreItem/StoreItem.css"
import Heart from "react-heart"

function StoreItem({item, handleButtonAddBasket, 
    active, setActive, handleButtonAddFavorite}) {

    const navigate = useNavigate()

    function handleLiClickItem(e) {
        e.preventDefault()
        e.stopPropagation()
        navigate(`/products/${item.id}`)
    }

    const date1 = Date.parse('2021/10/1')
    const date2 = Date.parse(item.date)
    const checkingDate = date2 > date1

    return (

        <>
        
            <li 
                className = {checkingDate ? "store-item" : "store-item-no-date"} 
                onClick={function (e) {
                    handleLiClickItem(e)}}
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

                <button onClick={function (e) {
                    e.stopPropagation()
                    handleButtonAddBasket(item)
                }}>
                    Add to cart
                </button>

                <Heart 
                    isActive={active}
                    style = {{height: 25, width: 35}} 
                    onClick={function (e) {
                        e.stopPropagation() 
                        setActive(!active)
                        handleButtonAddFavorite(item)
                    }}
                />
                
            </li>
            
        </>

    )

}

export default StoreItem