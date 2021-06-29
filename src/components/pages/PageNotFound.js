import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='notFound'>
            <h1 className="display-1">Page Not Found</h1>
            <br/><br/>
            <Link className="nav-link" exact to="/">
                <button class="btn btn-primary">Go back</button>
            </Link>
        </div>
    );
};

export default PageNotFound;