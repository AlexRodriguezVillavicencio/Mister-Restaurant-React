import React from 'react';
import principal from '../../../static/img/principal.jpg';
import burger from '../../../static/img/hamburguesa.png';
import grill from '../../../static/img/parrilla.png';
import '../../../static/css/promotions.css'


const Promotions = () => {
    return (
        <>
            <img src={principal} alt="Las mejores comidas hecha con los mejores ingredientes - Foto de Victoria Shes en Unsplash"  width="100%" />
            <div className="container-main">
                <h2>PROMOCIONES</h2>
                <div className="card-options">
                    <div className="card-option" id="1">
                        <img src={burger} alt="hamburguesa" height="280px" />
                        <p>Triple Burger</p>
                    </div>
                    <div className="card-option" id="2">
                        <img src={grill} alt="parrilla" height="310px" />
                        <p>El parrillero familiar</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Promotions
