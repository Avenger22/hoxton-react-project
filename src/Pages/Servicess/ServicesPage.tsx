import "../../Pages/Servicess/Services.css"
import "../../Components/Servicess/Service"
import Service from "../../Components/Servicess/Service"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import { useEffect } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import {setServices} from '../../redux/actions/actions'
import axios from "axios"
import { UrlPath } from "../../configUrl"

export default function ServicesPage() {

    const dispatch = useDispatch()
    const services = useSelector((state: RootStateOrAny) => state.setServices.services)

    // function getServicesFromServer () { BOTH VERSIONS WORKED WITH REDUX STATE

    //     fetch(`${UrlPath}/services`)
    //       .then(resp => resp.json())
    //       .then(servicesFromServer => dispatch(setServices(servicesFromServer)))
    // }

    const fetchServices:any = async () => {

        const response:any = await axios

          .get(UrlPath + "services")
          .catch((err) => {
            console.log("Err: ", err)
          })

        dispatch(setServices(response.data))

      }
    
      useEffect(() => {
        fetchServices();
      }, []);

    // function fetchProducts() {
    //     return dispatch => {
    //       dispatch(fetchProductsBegin());
    //       return fetch("/products")
    //         .then(handleErrors)
    //         .then(res => res.json())
    //         .then(json => {
    //           dispatch(fetchProductsSuccess(json.products));
    //           return json.products;
    //         })
    //         .catch(error => dispatch(fetchProductsFailure(error)));
    //     };
    // }

    // useEffect(getServicesFromServer, [])

    console.log(services)

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