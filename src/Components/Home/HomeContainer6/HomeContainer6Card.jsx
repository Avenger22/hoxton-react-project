export default function HomeContainer6Card({card}) {

    return (

        <>

            <div className="card-2">

                <img src={card.image} alt=""/>
                <h5>{card.name}</h5>
                <p>{card.desc}</p>
                <button className="button-cards-2">See more</button>

            </div>

        </>

    )

}