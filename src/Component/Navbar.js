import React from 'react';
import '../App.scss'

// import {MdArrowDropDown} from 'react-icons/md';
// import {dashBoardLogo} from '../assets/dashBoardLogo.png'
// import {Intellectus} from '../assets/intellectus.png'

const Navbar = () => {
    return (
        <div>
            <section id="navbar">
                <div className="wrapper">
                    <div className="main-logo"></div>
                    <div className="innerwrapper">
                        <div className="dropdown">
                            <h1 className="Jasmine">Jasmine Amous</h1>
                            <div className='arrowdown'></div>
                        </div>

                        <button className="MyDashboard" >My Dashboard <div></div> </button>
                        <button className="ar">Ar</button>

                        <div className="Intellectus"></div>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Navbar;