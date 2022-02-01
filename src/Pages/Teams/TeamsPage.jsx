import { useEffect, useState } from "react";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import Coach from "../../Components/Teams/Coach";
import "./Teams.css"

export default function TeamsPage() {

    const [coaches, setCoaches] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/coaches`)
            .then(resp => resp.json())
            .then(coachesFromServer => setCoaches(coachesFromServer))
    }, [])

    return (

        <>

            <HeaderCommon />

            <section className="coaches-wrapper">

                {

                    coaches.map(coach =>
                        
                        <Coach
                            key = {coach.id}
                            coach = {coach}
                        />

                    )

                }

            </section>

            <FooterCommon />

        </>

    )
    
}