import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
   
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3006/user");
        setUser(result.data.reverse());
    };
    const deletehandler = async (id) =>{
        const result = await axios.delete(`http://localhost:3006/user/${id}`)
        loadUsers();
    }
    return (
        <div class="py-4">
            <h1>This is home page</h1>
            <table class="table table-dark table-hover container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>
                                    <Link to={`/viewuser/${user.id}`} class="btn btn-primary ms-2">View</Link>
                                    <Link to={`/edituser/${user.id}`} class="btn btn-outline-success ms-2">Edit</Link>
                                    <Link onClick={()=>deletehandler(user.id)} class="btn btn-danger ms-2">Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;
