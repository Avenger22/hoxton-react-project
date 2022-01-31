import "../Category/Category.css"

export default function Category({item, handleOnClickCategory}) {

    return (

        <>

            <li onClick={function (e) {
                e.preventDefault()
                handleOnClickCategory(item)
            }}>
                
                <a>{item}</a>
                
            </li>

        </>

    )

}