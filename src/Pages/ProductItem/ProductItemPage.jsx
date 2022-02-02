// #region 'Importing'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import "./ProductItem.css"

import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import RelatedItem from "../../Components/ProductItem/RelatedItem"
// #endregion

const randColour = ["green", "red", "blue", "yellow"][
    Math.floor(Math.random() * 4)
];

export default function ProductItemPage() {

    const params = useParams()
    const [item, setItem] = useState(null) //important for fetching only 1 item
    
    // const [itemsByCategory, setItemsByCategory] = useState(null) //important for related posts
    
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    
    // function handleRedirectToBag() {
    //     navigate(`/bag`)
    // }

    function handleButtonAddBasket(product) {

        // handleRedirectToBag()

        let itemsCopy = JSON.parse(JSON.stringify(items))
        const index = itemsCopy.findIndex(target => target.id === product.id)

        const item = itemsCopy[index]
        const newItem = {
            ...item,
            quantity: item?.quantity ? item.quantity + 1 : 1
        }

        itemsCopy[index] = newItem
        setItems(itemsCopy)

        navigate('/bag')

    }

    function filterCategory() {
        return items.filter(item => item.type === type && item.name !== name)
    }

    useEffect(() => {
        fetch(`http://localhost:8000/items/${params.id}`)
        .then(resp => resp.json())
        .then(itemFromServer => setItem(itemFromServer))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/items`)
        .then(resp => resp.json())
        .then(itemsFromServer => setItems(itemsFromServer))
    }, [])

    if (item === null) {
        return <main>Loading...</main>
    }

    if (item.name === undefined) {
        return <main>Item not found</main>
    }

    const type = item.type
    const name = item.name
    const itemsCategory = filterCategory()

    // useEffect(() => {
    //     fetch(`http://localhost:8000/items?by_type=${type}`)
    //         .then(resp => resp.json())
    //         .then(itemsByCategoryFromServer => setItemsByCategory(itemsByCategoryFromServer))
    // }, [])

    // if (itemsByCategory === null) {
    //     return <main>Loading...</main>
    // }

    // if (itemsByCategory.name === undefined) {
    //     return <main>Item by category not found</main>
    // }

    return (

        <>

            <HeaderCommon />

            <main className='main-container'>

                <div className='product-ribbon'>
                    <span className='ribbon-span'>Products / </span>
                    <span className='ribbon-span'>{item.type} / </span>
                    <span className='ribbon-span'>{item.name}</span>
                </div>

                <section className="product-detail main-wrapper">

                    <img
                        src={item.image}
                        alt={item.description}
                    />

                    <div className="product-detail__side" style={{ borderColor: `var(--${randColour})` }}>

                        <h3>{item.name}</h3>

                        <h2><span className='special-product-span'>Product Name</span> : {item.name}</h2>

                        <p>
                            <span className='special-product-span'>Description</span> : {item.description}
                        </p>

                        <p>
                            <span className='special-product-span'>
                                Item Price
                            </span> : ${item.price}
                        </p>

                        <p>
                            <span className='special-product-span'>
                                Category : 
                            </span> : {item.type}
                        </p>

                        <p>
                            <span className='special-product-span'>
                                In Stock
                            </span> : {item.stock}
                        </p>

                        <button onClick={function () {
                            handleButtonAddBasket(item)
                        }}>
                            Add to bag
                        </button>

                    </div>

                </section>

            <section className='product-related-wrapper'>

                <div className='product-related-images'>

                    <div className='product-related-header'>
                        <h4>Related Products</h4>
                    </div>

                    <div className='related-box-wrapper'>

                        {
                            
                            itemsCategory.map(item =>
                                
                                <RelatedItem 
                                    key = {item.id}
                                    item = {item}
                                />
                                
                            )

                        }


                    </div>

                </div>

            </section>

        </main>

            <FooterCommon />

        </>
        
    )
    
}