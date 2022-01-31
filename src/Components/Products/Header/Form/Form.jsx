import "../Form/Form.css"

function Form(props) {

    const {searchTerm, setSearchTerm, searchOnCategory, 
    setSearchOnCategory, selectType, setSelectType} = props

    function handleOnChangeSearchSelect(selectValue) {

        if (searchTerm === '') {
            alert('you cant select based on categories without a search string')
            setSearchOnCategory('Default')
        }

        else {
            setSearchOnCategory(selectValue)
        }

    }

    function handleOnSubmitForm(formInputValue) {
        setSearchTerm(formInputValue) 
    }

    return (

        <>

            <form className="products-form-wrapper" onSubmit={function (e) {
                e.preventDefault()
                handleOnSubmitForm(e.target.search-product.value)
            }}>
                                
                 <select name="filter-by-categories" id="filter-by-categories" onChange={function (e) {
                    handleOnChangeSearchSelect(e.target.value)
                 }}>

                    <option value="Default">Categories</option>
                    <option value="MultiVitamins">MultiVitamins and essentials minerals</option>
                    <option value="PreWorkouts">Pre-Workout</option>
                    <option value="Proteins">Proteins</option>
                    <option value="testosteroneBoosters">Testosterone Boosters</option>
                    <option value="WeightGainers">Weigh Gainers</option>
                    <option value="Aminoacids">Aminoacids</option>
                    <option value="Creatines">Creatines</option>
                    <option value="WeightBurners">Weigh Burners</option>

                </select>
                                
                <input type="text" name="search-product" defaultValue = {searchTerm} placeholder="Search for products."/>
                <button id="special-button">Search</button>
                            
            </form>
        
        </>

    )

}

export default Form