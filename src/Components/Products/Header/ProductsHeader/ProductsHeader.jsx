import Form from '../Form/Form'
import {Link, useNavigate} from 'react-router-dom'
import UlSub2li from '../UlSubLi/UlSub2Li'

import "../ProductsHeader/ProductsHeader.css"

function ProductsHeader(props) {

    const {selectedModal,
    setSelectedModal, searchTerm, setSearchTerm, searchOnCategory,
    setSearchOnCategory, userName, setUserName, userCatcher, 
    setUserCatcher, selectType, setSelectType} = props

    const ulSub2 = ['Home', 'Products', 'Offers', 'About-Us', 'Blog', 'Contact']

    const navigate = useNavigate()
    
    function handleRedirectToBag() {
        navigate(`/bag`)
    }

    function handleRedirectToFavorite() {
        navigate('/favorites')
    }

    return (

        <>

            <header className="products-header-menu">
                    
                    <div className="header-products-sub-1">
                        
                        <ul className="ul-products-sub-1">
                            
                            <li id="logo-products">
                                <Link to="/products">AlbVitaFitness</Link>
                            </li>
                            
                            <Form 
                                searchTerm = {searchTerm}
                                setSearchTerm = {setSearchTerm}

                                searchOnCategory = {searchOnCategory}
                                setSearchOnCategory = {setSearchOnCategory}
                            />

                            <div className="dropdown-product">

                                <button className="button-image">
                                    <img src="/assets/icons/user.png" alt=""/>
                                    <span className="span-user-login null"></span>
                                </button>

                                <div className="dropdown-content">
                                    <Link to ="/sign-in">Sign In</Link>
                                    <Link to ="/sign-up">Sign Up</Link>
                                </div>

                            </div>
   
                            <button className="button-image" onClick={handleRedirectToFavorite}>
                                <img src="/assets/icons/favorite.png" alt=""/>
                                <span className="span-fav-number null"></span>
                            </button>

                            <button className="button-image" onClick={handleRedirectToBag}>
                                <img src="/assets/icons/shopping-bag.png" alt=""/>
                                <span className="span-bag-stock null"></span>
                            </button>
                            
                        </ul>
                            
                    </div>
                        
                    <div className="header-products-sub-2">
                                    
                        <ul className="ul-products-sub-2">
                            
                            {

                                ulSub2.map(item => 
                                    
                                    <UlSub2li 
                                        key = {item}
                                        item = {item}
                                    />
                                    
                                )

                            }
                            
                        </ul>
                        
                    </div>
                    
            </header>

        </>

    )

}

export default ProductsHeader