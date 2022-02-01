import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import "./ServiceItem.css"

export default function ServiceItemPage() {

    const params = useParams()
    const [serviceItem, setServiceItem] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/services/${params.id}`)
            .then(resp => resp.json())
            .then(servicesFromServer => setServiceItem(servicesFromServer))
    }, [])

    if (serviceItem === null) {
        return <main>Loading...</main>
    }

    if (serviceItem.name === undefined) {
        return <main>This service is not found</main>
    }
    
    return (

        <>

            
        
        </>

    )
    
}