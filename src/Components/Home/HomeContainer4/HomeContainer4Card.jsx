export default function HomeContainer4Card({card}) {

    return (

        <>

            <div className="card">

                <img src={card.image} alt=""/>
                <h5>{card.name}</h5>
                <p>{card.desc}</p>
                <button>See more</button>

            </div>

        </>

    )

}