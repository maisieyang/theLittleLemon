import React, { useState } from 'react';
import './styles/BookingForm.css';

import axios from 'axios';


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
        if (regeName.test(name) && email.includes('@') && regeTel.test(phone)) {
            setNameError('');
            setEmailError('');
            setPhoneError('');
            axios.post('/posts', {
                name,
                email,
                phone,
                date,
                time,
                guests,
                message
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

            console.log(name, email, phone, date, time, guests, message);
        }
    return (
        <>
            <div className="booking-form">
                <div className="res-content-container">
                    <div className="text">
                        <h2>Experience the perfect balance of tradition and luxury.</h2>
                        <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                        <p>Book a table with us to share in this experience.</p>
                    </div>

                    <div className="form">
                        <h1>Reserve a Table</h1>
                        <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" value={name} required
                                    onChange={e => setName(e.target.value)}
                                />
                                {nameError && <span className="error-message">{nameError}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                {emailError && <span className="error-message">{emailError}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" className="form-control" id="phone" required
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                {phoneError && <span className="error-message">{phoneError}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input type="date" className="form-control" id="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <input type="time" className="form-control" id="time"
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="guests">Guests</label>
                                <input type="number" className="form-control" id="guests"
                                    value={guests}
                                    onChange={e => setGuests(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default  BookingForm