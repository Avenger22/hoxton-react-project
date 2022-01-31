import Aside from "./Aside"
import Pagination from "./Pagination"
import StoreItem from "./StoreItem"
import Ribbon1 from './Ribbon1'
import Ribbon2 from './Ribbon2'

function ProductsMain() {

    return (

        <>
        
            <main className="main-menu">

                <Ribbon1 />
                
                <Ribbon2 />
                
                <div className="items-container">
                            
                        <div className="store-items-wrapper">
                            
                            <StoreItem />

                        </div>
                        
                </div>
                    
                <Pagination />
                    
                <div className="aside-wrapper">
                        
                    <Aside />
                        
                </div>
                    
            </main>
        
        </>

    )

}

export default ProductsMain