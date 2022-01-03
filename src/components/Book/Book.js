import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello,{loggedInUser.name} Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;