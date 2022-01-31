function Ribbon2() {

    return (

        <>

            <div className="main-ribbon-2">

                <div className="box-wrapper-1">
                    <span className="number-span">0</span>
                    <span>Products found</span>
                </div>

                <form id="filter-by-sort" autoComplete="off">
                    <label htmlFor="filter-by-type">
                        <h3>Sorting Options:</h3>
                    </label>
                    
                    <select name="filter-by-sort" id="filter-by-sort">
                        <option value="Default">No Sorting (Deffault)</option>
                        <option value="price-asc">Sort by price ascending</option>
                        <option value="price-desc">Sort by price descending</option>
                        <option value="date-asc">Sort by oldest</option>
                        <option value="date-desc">Sort by newest</option>
                        <option value="name-asc">Sort by name ascending</option>
                        <option value="name-desc">Sort by name descending</option>
                    </select>
                    
                </form>

            </div>
        
        </>

    )

}

export default Ribbon2