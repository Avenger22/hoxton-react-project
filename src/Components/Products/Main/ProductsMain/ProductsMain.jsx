// #region 'Importing'
import Aside from "../Aside/Aside"
import Pagination from "../Pagination/Pagination"
import StoreItem from "../StoreItem/StoreItem"
import Ribbon1 from '../Ribbon1/Ribbon1'
import Ribbon2 from '../Ribbon2/Ribbon2'

import "../ProductsMain/ProductsMain.css"

// #endregion

function ProductsMain(props) {

    const {items, setItems, initialItems, setInitialItems,
        selectType, setSelectType, category, setCategory, showItems} = props

    // #region 'Returning Html'
    return (

        <>
        
            <main className="main-menu">

                <Ribbon1 />
                
                <Ribbon2 
                    selectType = {selectType}
                    setSelectType = {setSelectType}
                    showItems = {showItems}
                />
                
                <div className="items-container">
                            
                        <ul className="store-items-wrapper">

                            {
                                
                                showItems().map(item => 
                                    
                                    <StoreItem 
                                        key = {item.id}
                                        item = {item}
                                    />
                                    
                                )
                                
                            }

                        </ul>
                        
                </div>
                    
                <Pagination />
                    
                <div className="aside-wrapper">
                        
                    <Aside 
                        category = {category}
                        setCategory = {setCategory}
                    />
                        
                </div>
                    
            </main>
        
        </>

    )
    // #endregion

}

export default ProductsMain