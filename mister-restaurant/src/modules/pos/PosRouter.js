import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Burgers from './pages/Burgers';
import Chikens from './pages/Chikens';
import Drinks from './pages/Drinks';
import Grills from './pages/Grills';
import Promotions from './pages/Promotions';
import '../../static/css/header.css'
import Logo from './components/header/Logo';
import Navbar from './components/header/Navbar';
import '../../static/css/footer.css';


const PosRouter = () => {
    return (
        <>
            <header>
                <Logo/>
                <Navbar/>
            </header>
            <Switch>
                <Route path='/promociones' component={Promotions}/>
                <Route path='/pollos-a-la-brasa' component={Chikens}/>
                <Route path='/parrillas' component={Grills}/>
                <Route path='/hamburguesas' component={Burgers}/>
                <Route path='/bebidas' component={Drinks}/>
                <Redirect to="/promociones" />              
            </Switch>
            <footer>
                <div className="foot-container1">
                    <a href="#">CONTACTO</a>
                    <div className="foot-logo-items">
                        <a href="#">o</a>
                        <a href="#">o</a>
                        <a href="#">o</a>
                        <a href="#">o</a>
                    </div>
                </div>
                <div className="foot-container2">
                    <div className="foot-text-items">
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Aviso de Fraude</a>
                        <a href="#">Terminos y Condiciones</a>
                        <a href="#">Libro de Reclamaciones</a>
                    </div>
                    <a href="#">PLANTILLA CREADA POR ALEX RODRIGUEZ - 2021</a>
                </div>
            </footer>
        </>
    )
}

export default PosRouter
