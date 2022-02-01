import {useNavigate } from "react-router"

export default function HomeContainer4Card({card}) {

    const navigate = useNavigate()

    function handleClickServices() {
        navigate(`/services/${card.id}`)
    }

    return (

        <>

            <div className="card">

                <img src={card.image} alt=""/>
                <h5>{card.name}</h5>
                <p>{card.desc}</p>
                <button onClick={handleClickServices}>More Details</button>

            </div>

        </>

    )

}