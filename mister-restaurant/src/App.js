import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PosRouter from './modules/pos/PosRouter';


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={PosRouter}/>
        </Switch>
      </Router>
    </>
  )
}

export default App

