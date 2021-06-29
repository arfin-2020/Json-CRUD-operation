import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const View = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    })
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3006/user/${id}`)
        setUser(result.data)
    }
    const { name, username, email, phone, website } = user;
    return (
        <div className="container">
        <Link className="btn btn-success mt-2" to='/'>Back Home</Link>
            <h1 className='display-4'>User Id: {id}</h1><hr />
            <div className="shadow w-50 py-5 container">
                <ul className = "list-group">
                    <li className="list-group-item">User Name {name}</li>
                    <li className="list-group-item"> User Username {username}</li>
                    <li className="list-group-item"> User Email {email}</li>
                    <li className="list-group-item"> User Phone {phone}</li>
                    <li className="list-group-item"> User Website {website}</li>
                </ul>
            </div>
        </div>
    );
};

export default View;