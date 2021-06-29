import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    const {id} = useParams()
    const [user, setUser] = useState({
        name: "",
        usename: "",
        email: "",
        phone: "",
        website: "",
      });
      const { name, username, email, phone, website } = user;
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      let history = useHistory();
      const handleSubmit = async (e) => {
            e.preventDefault();
            await axios.put(`http://localhost:3006/user/${id}`, user)
            history.push("/")
      };
      const update = () =>{
          alert('User Update successfull')
      }
      useEffect(() =>{
          loadUser()
      },[])
      const loadUser = async () =>{
          const result = await axios.get(`http://localhost:3006/user/${id}`)
          setUser(result.data)
      }
    return (
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Edit User</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Email Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Phone No"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button onClick={update} className="btn btn-success">Update User</button>
        </form>
      </div>
    </div>
    );
};

export default EditUser;