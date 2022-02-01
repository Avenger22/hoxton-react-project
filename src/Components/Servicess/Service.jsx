import { useNavigate } from "react-router"

export default function Service({service}) {

    const navigate = useNavigate()

    function handleDivClick() {
        navigate(`/services/${service.id}`)
    }
    
    return (

        <>

            <div className="box" onClick={handleDivClick}>
                <span>{service.name}</span>
            </div>
        
        </>

    )

}