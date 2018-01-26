import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import NavbarContainer from './header_bar/navbar_container';

const App = () => (
  <div>
    <header className="navbar">
      <div className='logo'>
        <span>RicaCommercial</span>
      </div>
      <NavbarContainer/>
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
)

export default App;
