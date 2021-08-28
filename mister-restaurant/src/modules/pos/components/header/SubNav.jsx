import React from 'react';
import chicken from '../../../../static/img/pollo parrillero.png';
import grill from '../../../../static/img/parrilla.png';
import burger from '../../../../static/img/hamburguesa.png';
import drink from '../../../../static/img/bebida coca.png';

const SubNav = () => {
    return (
        <>
            <div className="nav-menu-items">
                <div className="nav-menu-item" id="1">
                   <img src={chicken} alt="chicken" width="176px" height="84px" />
                   <a href="#">Pollos a la brasa</a>
                </div>
                <div className="nav-menu-item" id="2">
                    <img src={grill} alt="grill" width="145px" height="99px" />
                    <a href="#">Parrillas</a>
                </div>
                <div className="nav-menu-item" id="3">
                    <img src={burger} alt="burger" width="126px" height="94px" />
                    <a href="#">Hamburguesas</a>
                </div>
                <div className="nav-menu-item" id="4">
                    <img src={drink} alt="drink" width="121px" height="110px" />
                    <a href="#">Bebidas</a>
                </div>
            </div>             
        </>
    )
}

export default SubNav
