import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import Landing from './components/landingComponents/Landing';
import Home from './components/homeComponents/Home'
import { loadUser } from './helpers/auth'
import PageNotFound from './components/PageNotFound';
import QuestResults from './components/quests/QuestResults';

function App() {

  const data = loadUser();
  const { id } = data

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Landing}/>
        <PrivateRoute path = '/quests' isLoggedIn={id} component={QuestResults} />
        <PrivateRoute exact path='/' isLoggedIn={id} component={Home} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
