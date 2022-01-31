function StoreItem() {

    return (

        <>
        
            <div className="store-item">

                <span className="new-item-date">New Item</span>
                <img src="/assets/images/animal-pak-powder.png" alt=""/>
                <h2>Animal Pak Powder</h2>

                <div className="span-wrapper-item">
                    <span className="span-1">price: $55</span>
                    <span className="span-3-item">Stock: 7</span>
                    <span className="span-4-item">Type: multivitamins</span>
                </div>

                <button>Add to cart</button>
                <button>Quick view the product</button>

            </div>
            
        </>

    )

}

export default StoreItem