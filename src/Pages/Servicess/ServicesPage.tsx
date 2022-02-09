import "../../Pages/Servicess/Services.css"
import "../../Components/Servicess/Service"
import Service from "../../Components/Servicess/Service"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import { useEffect } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import {setServices} from '../../Actions/actions'

export default function ServicesPage() {

    const dispatch = useDispatch()

    const services = useSelector(
        (state: RootStateOrAny) => state.services)

    function getServicesFromServer () {

        fetch(`http://localhost:8000/services`)
          .then(resp => resp.json())
          .then(coachesFromServer => dispatch(setServices(coachesFromServer)))
        
    }

    useEffect(getServicesFromServer, [])

    return (

        <>

            <HeaderCommon />
                
            <section className="boxes-wrapper">

                <div className="header-service">
                    <h2>Our Services</h2>
                </div>

                <div className="services-wrapper">
                    
                    {

                        services.map(service =>
                            
                            <Service 
                                key = {service.id}
                                service = {service}
                            />

                        )

                    }

                </div>

            </section>

            <FooterCommon />

        </>

    )
    
}