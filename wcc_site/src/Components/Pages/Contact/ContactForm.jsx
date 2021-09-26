import React, { useState } from 'react';
// import axios from 'axios';

export default function Contact() {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone:'',
        message: ''
    })

    const onChange = e =>{
        setForm({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const onSubmit = e =>{
        e.preventDefault()
        e.persist()

        // const url = `https://`
        // console.log(form)

        // axios.post(url)
    }
    return (
        <div id = 'Contact'> 
            <h2 className = 'main-h2'>Contact</h2>
            <div className="contact-card">

                <div className = 'business-info'>
                    <address>
                        <h5>High Ground Restore Inc.</h5>
                        <h6>P.O. Box 2931</h6>
                        <h6>Chicago IL, 60602</h6>
                        <hr/>
                        <h6>312-392-1233</h6>
                        <h6>contact@highgroundrestore.com</h6>
                    </address>
                    <p>Contact us to get your free quote today!</p>
                </div>
                 
                <form className = 'form' onSubmit={onSubmit}>
                    <label > Name :</label>
                    <input
                    onChange = {onChange}
                    placeholder='What can we call you?'
                    type="text"
                    name='name'
                    value={form.name}
                    />
                
                    <label > Email :</label>
                    <input
                    onChange = {onChange}
                    placeholder='freddymercury@queen.com'
                    type="email"
                    name='email'
                    value={form.email}
                    />
                
                
                    <label > Phone :</label>
                    <input
                    onChange = {onChange}
                    placeholder='(312)666-3500'
                    type="text"
                    name='phone'
                    value={form.phone}
                    />
                
                    <label > Message :</label>
                    <textarea
                    onChange = {onChange}
                    placeholder='I had a question about my roof...'
                    type="text"
                    name='message'
                    value={form.message}
                    />
                
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}