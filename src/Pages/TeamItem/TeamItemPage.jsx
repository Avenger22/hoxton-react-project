import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./TeamItem.css"

export default function TeamItemPage() {

    const params = useParams()
    const [teamItem, setTeamItem] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/coaches/${params.id}`)
            .then(resp => resp.json())
            .then(coachesFromServer => setTeamItem(coachesFromServer))
    }, [])

    if (teamItem === null) {
        return <main>Loading...</main>
    }

    if (teamItem.name === undefined) {
        return <main>This coach is not found</main>
    }
    
    return (

        <>
        
        
        </>

    )
    
}