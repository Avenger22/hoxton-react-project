import { useState } from "react"
import "../Category/Category.css"

export default function Category({item, handleOnClickCategory}) {

    const [clicked, setClicked] = useState(false)

    function handleLinkActive() {
        setClicked(!clicked)
    }

    return (

        <>

            <li onClick={function (e) {
                handleOnClickCategory(item)
            }}>
                
                <a className = {clicked ? "active" : null} onClick={handleLinkActive}>{item}</a>
                
            </li>

        </>

    )

}