import React from 'react';
import SubNav from './SubNav';

const Navbar = () => {
    return (
        <>
                <nav className="nav">  
                    <div className="nav-items">         
                        <div className="nav-menu">
                            <a href="#">NUESTRO MENÚ</a>
                            <SubNav/>
                        </div>
                    
                        <div className="nav-container-items__promotion">
                            <a href="">PROMOCIONES</a>
                        </div>
                        <div className="nav-container-items-delivery">
                            <a href="">RECOGELO POR TIENDA O PIDELO POR DELIVERY</a>
                        </div>
                        <img src="#" alt="t" />
                    </div>
                </nav>           
        </>
    )
}

export default Navbar
