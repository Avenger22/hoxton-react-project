import Category from '../Category/Category'
import "../Aside/Aside.css"

function Aside({category, setCategory}) {

    const categories = ['Default', 'Multivitamins',
    'Pre-Workouts', 'Creatine', 'Testosterone-Boosters', 
    'Aminoacids', 'Weight-Burner', 'Weight-Gainers', 'Proteins' ]
    
    function handleOnClickCategory(liValue) {
        setCategory(liValue)
    }

    return (

        <>
        
            <aside className="aside-container-1">
                                
                <ul className="ul-aside">

                    <li id="special-aside">Categories</li>
   
                    {

                        categories.map(item =>
                           
                            <Category 
                                key = {item}
                                item = {item}
                                handleOnClickCategory = {handleOnClickCategory}
                            />

                        )

                    }
                        
                </ul>
                    
            </aside>
                                
            <aside className="aside-container-2">
                
            </aside>

        </>

    )

}

export default Aside