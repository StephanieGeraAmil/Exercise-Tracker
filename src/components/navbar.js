import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {  
    return (
        <nav className='navbar navbar-dark  bg-dark navbar-expand-sm px-4'>
             <Link to="/" className="navbar-brand">ExcerciseTracker</Link>
             
            <div className='collapse navbar-collapse d-flex flex-row justify-content-end'>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to={`/`} className='nav-link'>Exercises</Link> 
                    </li>
                    <li className='navbar-item'>
                        <Link to={`/create`}  className='nav-link'>Create Exercise</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to={`/user`}  className='nav-link'>Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default Navbar;