import React, { useState } from 'react';
import './styles/BookingForm.css';


function  BookingForm () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    const handleSubmit = (e) => {
            e.preventDefault();
            const regeName = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
            const regeTel = /^(?=.*[0-9]).{11}$/;
            if(!regeName.test(name)) {
                setNameError('Your name must contain at least one uppercase letter and one lowercase letter');
            }
            if(!email.includes('@')) {
                setEmailError('Your email must contain @');
            }
            if(!regeTel.test(phone)) {
                setPhoneError('Your phone number must contain 11 digits');
            }
            if(regeName.test(name) && email.includes('@') && regeTel.test(phone)) {
                setNameError('');
                setEmailError('');
                setPhoneError('');
            }
            console.log(name, email, phone, date, time, guests, message);
        }
    return (
        <>
            <div className="booking-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={name} required
                        onChange={ e => setName(e.target.value) }
                        />
                        {nameError && <div className="error">{nameError}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                        />
                        {emailError && <div className="error">{emailError}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone" required
                        value={phone}
                        onChange={ e => setPhone(e.target.value) }
                        />
                        {phoneError && <div className="error">{phoneError}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date"
                        value={date}
                        onChange={ e => setDate(e.target.value) }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input type="time" className="form-control" id="time"
                        value={time}
                        onChange={ e => setTime(e.target.value) }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Guests</label>
                        <input type="number" className="form-control" id="guests"
                        value={guests}
                        onChange={ e => setGuests(e.target.value) }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="3" 
                        value={message}
                        onChange={ e => setMessage(e.target.value) }
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )

}

export default  BookingForm