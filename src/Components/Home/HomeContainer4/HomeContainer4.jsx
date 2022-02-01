import HomeContainer4Card from "./HomeContainer4Card"
import './HomeContainer4.css'
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

export default function HomeContainer4() {

    const navigate = useNavigate()

    function handleOurServices() {
        navigate(`/services`)
    }
    
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/services`)
            .then(resp => resp.json())
            .then(servicesFromServer => setServices(servicesFromServer))
    }, [])

    const newServices = services.slice(0,4)

    const cards = [

        {
            id: 1, 
            image: "/assets/images/main/foto-5.jpg", 
            name: 'Basic Crossfit',
            desc: 'We do Crossfit'
        },

        {
            id: 2, 
            image: "/assets/images/main/foto-6.jpg", 
            name: 'Basic Fitness',
            desc: 'We do Fitness'
        },

        {
            id: 3, 
            image: "/assets/images/main/foto-2.jpg", 
            name: 'Basic Yoga',
            desc: 'We do Yoga'
        }

    ]

    return (

        <>
        
            <section className="home-container-4" id="home-container-4">

                <div className="text-box-2">
                    <h4>Our Services</h4>
                    <p>Here are some of the services that we offer in a wide range of things</p>
                </div>

                <div className="cards">

                    {

                        cards.map(card =>
                            
                            <HomeContainer4Card 
                                key={card.id}
                                card = {card}
                            />
                            
                        )

                    }

                </div>

                <div className="btn-all-wrapper">
                    <button onClick={handleOurServices} className="all-services-btn">
                        <span>All our services</span>
                    </button>
                </div>

            </section>

        </>

    )

}