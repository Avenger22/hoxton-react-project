import { useState } from "react"
import { useStore } from "../../../../Store/store"
import "../Category/Category.css"

export default function Category({item, handleOnClickCategory}) {

    const {categoryClicked, setCategoryClicked} = useStore()

    function handleLinkActive() {
        setCategoryClicked()
    }

    return (

        <>

            <li onClick={function (e) {
                handleOnClickCategory(item)
            }}>
                
                <a className = {categoryClicked === true ?  "active" : null} onClick={handleLinkActive}>{item}</a>
                
            </li>

        </>

    )

}