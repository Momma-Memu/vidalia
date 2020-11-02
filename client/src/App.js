import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import Landing from './components/landingComponents/Landing';
import Home from './components/homeComponents/Home'
import { loadUser } from './helpers/auth'


function App() {

  const data = loadUser();
  const { id } = data

  return (
    <BrowserRouter>
      <PrivateRoute exact path='/' isLoggedIn={id} component={Home} />
      <Route path='/login' component={Landing}/>
    </BrowserRouter>
  );
}

export default App;
