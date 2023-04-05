import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='container navbar navbar-expand-lg navbar-light '>
                <div className='container-fluid d-flex justify-content-around'>

                   <a className="navbar-brand mx-4" href="#">Doge</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='collapse navbar-collapse' id="navbarSupportedContent">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='"nav-item"'>
                                <a aria-current="page" href="#" className='nav-link active'></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                        </ul>
                    </div>
                   <div>
                   <img className='nav-img mx-5' src="https://i.imgflip.com/4twk2p.png" alt="" />

                    </div>                    
                </div>
            </nav>
        </div>
    );
};

export default Header;