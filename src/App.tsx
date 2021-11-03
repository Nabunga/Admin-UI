import React from 'react';
import './styles/reset.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OrderPage from './components/OrderPage/OrderPage';

const App = () => {
  return (
    <>
      <OrderPage />
    </>
  )
};

export default App;