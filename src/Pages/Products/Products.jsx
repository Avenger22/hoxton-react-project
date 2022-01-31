import "../Products/Products.css"
import ProductsHeader from "../../Components/Products/Header/ProductsHeader"
import ProductsMain from "../../Components/Products/Main/ProductsMain"
import ProductsFooter from '../../Components/Products/Footer/ProductsFooter'
import {Link} from 'react-router-dom'

function Products() {

    return (

        <>

            <section className="container-menus">

                <ProductsHeader />
                
                <ProductsMain />
                    
                <ProductsFooter />
                    
            </section>
                                                
        </>

    )

}

export default Products