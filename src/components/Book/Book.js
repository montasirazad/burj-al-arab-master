import React, { useState } from 'react';
import { useContext } from 'react';
import '../../App.css'
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Bookings from '../Bookings/Bookings';

const Book = () => {
    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [selectedDate, setSelectedDate] = useState(new Date({
        checkInDate: new Date(),
        checkOutDate: new Date()
    }));

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkInDate = date;
        setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkOutDate = date;
        setSelectedDate(newDates)
    }

    const handleBookIng = () => {
        const newBooking = { ...loggedInUser, ...selectedDate };
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => { console.log(data); })

    }

    return (
        <div className='App'>
            <h1>Hello,{loggedInUser.name} Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>

            <MuiPickersUtilsProvider utils={DateFnsUtils}  >
                <Grid container justifycontent="space-around" >
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check-in"
                        value={selectedDate.checkInDate}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Check-out"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOutDate}
                        onChange={handleCheckOutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
                <Button onClick={handleBookIng} variant="contained" color="secondary">  Book Now ..!!</Button>
            </MuiPickersUtilsProvider>
            <Bookings />
        </div>
    );
};

export default Book;