import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+ loggedInUser.email,{
            method:'GET',
            headers:{
              
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <h1>your bookings {bookings.length}</h1>
            {
                bookings.map(book => <li type='1' key={book._id}>{book.name} from: {(new Date(book.checkInDate).toDateString('dd/MM/yyyy'))}
                    to:{(new Date(book.checkOutDate).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Bookings;