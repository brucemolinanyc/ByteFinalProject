import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import ProfilePage from '../components/ProfilePage';
import RegistrationPage from '../components/RegistrationPage';
import RegistrationStatusPage from '../components/RegistrationStatusPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/vote" component={RegistrationStatusPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

 // <div>
      //   <Header/>
      // </div>