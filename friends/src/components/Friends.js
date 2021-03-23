import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Friends = () => {
    const [ friendsList, setFriendsList ] = useState([]);

    useEffect(() => {
        fetchFriends();        
    }, [])

    const fetchFriends = () => {
        const token = localStorage.getItem('token');

      
        axios
         .get('http://localhost:5000/api/friends', {
             headers: {
                authorization: token
             }
         })
         .then(res => {
             console.log(res)
         })
         .catch(err => {
             console.log(err.respose)
         })
    };

    return (
        <div>

        </div>
    )
}

export default Friends;