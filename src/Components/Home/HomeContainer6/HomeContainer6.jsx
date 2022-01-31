import HomeContainer6Card from "./HomeContainer6Card"
import './HomeContainer6.css'

export default function HomeContainer6() {

    const cards = [

        {
            id: 1, 
            image: "/assets/images/main/foto-1.jpg", 
            name: 'Ana Gonzalez',
            desc: 'My name is Ana Gonzalez'
        },

        {
            id: 2, 
            image: "/assets/images/main/foto-3.jpg", 
            name: 'John Mitt',
            desc: 'My name is John Mitt'
        },

        {
            id: 3, 
            image: "/assets/images/main/foto-4.jpg", 
            name: 'Billy Froster',
            desc: 'My name is Billy Froster'
        },

        {
            id: 4, 
            image: "/assets/images/main/foto-5.jpg", 
            name: 'Artan Shehu',
            desc: 'My name is Artan Shehu'
        }

    ]

    return (

        <>
        
            <section className="home-container-6" id="home-container-6">

                <div className="text-box-3">
                    <h4>Our Team</h4>
                    <p>Meet our amazing staff wich you will work with everyday to achieve your goals</p>
                </div>

                <div className="cards-2">

                    {

                        cards.map(card =>
                            
                            <HomeContainer6Card 
                                key = {card.id}
                                card = {card}
                            />
                            
                        )

                    }

                </div>

            </section>

        </>

    )

}