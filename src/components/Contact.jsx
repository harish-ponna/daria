import React, { useState } from 'react'
import Joi from 'joi'
import moment from 'moment'

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Please Enter Name',
            'string.min': 'Min 3 Chars required',
            'string.max': 'Max 30 Chars allowed',
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'co', 'in', 'live'] } })
        .required()
        .messages({
            'string.empty': 'Please Enter Email',
            'string.email': 'Invalid Email',
        }),
    dob: Joi.date()
        .greater('01/01/1950')
        .less(('05/28/2021'))
        .required()
        .messages({
            'date.base': 'Invalid Date',
            'date.greater': 'Date should be greater than year 1950',
            'date.less': 'Date cannot be in future',
        }),
    message: Joi.string()
        .min(10)
        .max(200)
        .required()
        .messages({
            'string.empty': 'Please Enter Message',
            'string.min': 'Min 10 Chars required',
            'string.max': 'Max 200 Chars allowed',
        }),
}).options({ abortEarly: false })

const Contact = () => {

    const [form, setForm] = useState({ name: '', email: '', dob: '', message: '' })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        setErrors(err => ({ ...err, [e.target.name]: '' }))
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        const { error } = schema.validate({ ...form, dob: moment(form.dob, 'DD/MM/YYYY').format('MM/DD/YYYY') })
        console.log({ error });
        if (error) {
            error.details.forEach(e => {
                setErrors(err => ({ ...err, [e.path[0]]: e.message }))
            })
            return alert('Please check the errors')
        }
        alert('Requested Successfully')
    }

    return (
        <div className='container'>
            <div className="sub-container contact">
                <div className="contact-content">
                    <div>
                        <h1 className="heading">Request Info</h1>
                        <p className="content">Got a question? Need to see a demo? Want to start your free trial subscription? We'd love to hear from you! Contact us and we will get back to you shortly.</p>
                    </div>
                    <img src="/images/contactImages/contact.png" style={{ width: '100%' }} />
                </div>
                <div className="contact-form">
                    <form id='request-info'>
                        <div className='input-container'>
                            <input onChange={handleChange} type='text' name='name' placeholder='Name*' />
                            <small className={errors.name ? 'error' : 'small'}>{errors.name || 'Min 3 characters'}</small>
                        </div>
                        <div className='input-container'>
                            <input onChange={handleChange} type='email' name='email' placeholder='Email*' />
                            <small className={errors.email ? 'error' : 'small'}>{errors.email || ''}</small>
                        </div>
                        <div className='input-container'>
                            <input onChange={handleChange} type='text' name='dob' placeholder='DOB*' />
                            <small className={errors.dob ? 'error' : 'small'}>{errors.dob || 'DD-MM-YYYY or DD/MM/YYYY'}</small>
                        </div>
                        <div className='input-container'>
                            <input onChange={handleChange} type='text' name='message' placeholder='Message*' />
                            <small className={errors.message ? 'error' : 'small'}>{errors.message || ''}</small>
                            <br />
                        </div>
                    </form>
                    <button onClick={handleSubmit} >Request Info</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
