import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';

function Users() {
    const { username } = useParams()

    useEffect(() => {
        fetch(`https://api.instagran.com/${username}`)
    }, [])

    return (
        <h1>{username}</h1>
    )
}

export default Users;