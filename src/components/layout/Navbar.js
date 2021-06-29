import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div class="container-fluid container">
                    <Link class="navbar-brand" to="/">
                        User Contact
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" exact aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" exact to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" exact to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link class="nav-link" exact to="/adduser">
                        <button class="btn btn-outline-light">Add user</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
