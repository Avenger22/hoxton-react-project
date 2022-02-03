// #region 'Importing'
import Aside from "../Aside/Aside"
import StoreItem from "../StoreItem/StoreItem"

import Ribbon1 from '../Ribbon1/Ribbon1'
import Ribbon2 from '../Ribbon2/Ribbon2'
import ReactPaginate from 'react-paginate'

import "../ProductsMain/ProductsMain.css"
import "../Pagination/Pagination.css"
// #endregion

function ProductsMain(props) {

    const {items, setItems, initialItems, setInitialItems,
        selectType, setSelectType, category, setCategory, showItems, 
        changePage, pageCount, pagesVisited, itemsPerPage, handleButtonAddBasket,
        active, setActive, handleButtonAddFavorite} = props

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
                                
                                showItems().slice(pagesVisited, pagesVisited + itemsPerPage).map(item => 
                                    
                                    <StoreItem 
                                        key = {item.id}
                                        item = {item}

                                        handleButtonAddBasket = {handleButtonAddBasket}
                                        active = {active}
                                        setActive = {setActive}
                                        handleButtonAddFavorite = {handleButtonAddFavorite}
                                    />
                                    
                                )
                                
                            }

                        </ul>
                        
                </div>
                    
                {/* React paginate custom components from npm, also has hooks and props custom*/}
                <ReactPaginate
                    previousLabel={"< Previous"}
                    // breakLabel={"..."}
                    nextLabel={"Next >"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    // forcePage={0}
                    // initialPage={0}
                    // pageRangeDisplayed={3}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    // breakLinkClassName={"breakBtn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    // renderOnZeroPageCount={null}
                />
                    
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