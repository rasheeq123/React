import React from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';


const Navbar = ({mycart}) => {
    const{loggedIn, setloggedIn, logout}= useAppContext();
   
    const showLoginOption=()=>{
        if(loggedIn){
            return (
             <li className="nav-item">
               <button className='btn btn-danger' onClick={logout} >  Logout</button>

            </li>
            );
        }
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact_form">
                                    Contact
                                </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Signup">
                                    Signup
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/event">
                                    Event Handling
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/state">
                                    State Management
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/post">
                                    Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/todo">
                                    Todo List
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="chatting">
                                    Chat View
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="list">
                                    Product List
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="up">
                                    SignUp_Sir
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <h4>Cart Items:{mycart}</h4>
                            </li>
                            {showLoginOption()}
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;