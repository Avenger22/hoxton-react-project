import { useState } from "react/cjs/react.development"
import "../ContactContainer3/ContactContainer3.css"

export default function ContactContainer3() {

    const [contact, setContact] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [phone, setPhone] = useState('')
    const [textArea, setTextArea] = useState('')

    function handleTextAreaChange(e) {
        setTextArea(e.target.value)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSubjectChange(e) {
        setSubject(e.target.value)
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value)
    }

    function handleContactSubmit(e) {

        const array = [name, email, subject, phone, textArea]
        const newArray = [...contact, array]

        e.target.reset()
        setContact(newArray)

    }

    return (

        <>
        
            <section className="contact-container-3" id="contact-container-3">

                <div className="contact-group-1">
                    <h2>Contact Information</h2>
                </div>

                <div className="contact-group-2">

                    <div className="form-group-1">
                        <h3>Page Info</h3>
                        <span>Email: info@albfitness.com</span>
                        <span>Contact:+35569 404 6408</span>
                        <span>(405) 379-8024400 Grimes Ave Holdenville, Oklahoma(OK), 74848</span>
                    </div>

                    <form className="form-group-2" onSubmit={function (e) {
                        e.preventDefault()
                        handleContactSubmit(e)
                    }}>

                        <input defaultValue = {name} name="fullname" type="text" placeholder="Name: " required onChange={function (e) {
                            e.preventDefault()
                            handleNameChange(e)
                        }}/>

                        <input defaultValue = {email} name="email" type="email" placeholder="Email: " required onChange={function (e) {
                            e.preventDefault()
                            handleEmailChange(e)
                        }}/>
                        
                        <input defaultValue = {subject} name="subject" type="text" placeholder="Subject: " required onChange={function (e) {
                            e.preventDefault()
                            handleSubjectChange(e)
                        }}/>

                        <input defaultValue = {phone} name="phone" type="tel" placeholder="Phone: " required onChange={function (e) {
                            e.preventDefault()
                            handlePhoneChange(e)
                        }}/>
                        
                        <textarea defaultValue = {textArea} name="textarea-contact" id="" cols={50} rows={20} placeholder="How can we help ?" onChange={function (e) {
                            e.preventDefault()
                            handleTextAreaChange(e)
                        }}></textarea>
                        
                        <button>
                            Let's Talk
                        </button>
                        
                    </form>

                </div>

            </section>

        </>

    )
    
}