import React from 'react';
import 'antd/dist/antd.css';
import './styles/reset.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import OrderPage from './components/OrderPage/OrderPage';
import EntitiesPage from './components/EntitiesPage/EntitiesPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CarSettingPage from './components/CarSettingPage/CarSettingPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Auth} exact />
        <Route path="/order-page" component={OrderPage} exact/>
        <Route path="/entities" component={EntitiesPage} exact/>
        <Route path="/error" component={ErrorPage} exact />
        <Route path="/car-setting" component={CarSettingPage} exact />
      </Switch>
    </Router>
  )
};

export default App;