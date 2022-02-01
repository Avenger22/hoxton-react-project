import { useNavigate } from "react-router-dom"

export default function Coach({coach}) {

    const navigate = useNavigate()

    function handleDivClick() {
        navigate(`/teams/${coach.id}`)
    }
    
    return (

        <>

            <div className="box" onClick={handleDivClick}>
                <span>{coach.name}</span>
            </div>

        </>

    )

}