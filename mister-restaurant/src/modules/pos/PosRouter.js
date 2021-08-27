import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Burgers from './pages/Burgers';
import Chikens from './pages/Chikens';
import Drinks from './pages/Drinks';
import Grills from './pages/Grills';
import Promotions from './pages/Promotions';

const PosRouter = () => {
    return (
        <>
            <Switch>
                <Route path='/promociones' component={Promotions}/>
                <Route path='/pollos-a-la-brasa' component={Chikens}/>
                <Route path='/parrillas' component={Grills}/>
                <Route path='/hamburguesas' component={Burgers}/>
                <Route path='/bebidas' component={Drinks}/>
                <Redirect to="/promociones" />              
            </Switch>
        </>
    )
}

export default PosRouter
