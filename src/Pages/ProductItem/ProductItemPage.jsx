// #region 'Importing'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import "./ProductItem.css"

import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import ProductsFooter from "../../Components/Products/Footer/ProductsFooter"
import RelatedItem from "../../Components/ProductItem/RelatedItem"
import ProductsHeader from '../../Components/Products/Header/ProductsHeader/ProductsHeader'
// #endregion

const randColour = ["green", "red", "blue", "yellow"][
    Math.floor(Math.random() * 4)
];

export default function ProductItemPage({handleButtonAddBasket, items, setItems, signInUserName, setSignInStatus, signInStatus}) {

    const params = useParams()
    const [item, setItem] = useState(null) //important for fetching only 1 item
    
    const [initialRelatedItems, setInitialRelatedItems] = useState([])
    const navigate = useNavigate()
    
    function filterCategory() {
        return initialRelatedItems.filter(item => item.type === type && item.name !== name)
    }

    useEffect(() => {
        fetch(`http://localhost:8000/items/${params.id}`)
        .then(resp => resp.json())
        .then(itemFromServer => setItem(itemFromServer))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/items`)
        .then(resp => resp.json())
        .then(itemsFromServer => setInitialRelatedItems(itemsFromServer))
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

    return (

        <>

            <section className='container-product-item'>

                <ProductsHeader 
                    signInStatus={signInStatus}
                    setSignInStatus={setSignInStatus}
                    signInUserName={signInUserName}
                />

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

                            <button onClick={function (e) {
                                e.stopPropagation()
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

                <ProductsFooter />

            </section>

        </>
        
    )
    
}