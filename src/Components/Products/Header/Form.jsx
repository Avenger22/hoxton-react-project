function Form() {

    return (

        <>

            <form className="form-wrapper">
                                
                 <select name="filter-by-categories" id="filter-by-categories">
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
                                
                <input type="text" name="search-product" value="" placeholder="Search for products."/>
                <button id="special-button">Search</button>
                            
            </form>
        
        </>

    )

}

export default Form