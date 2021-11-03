import React from 'react';
import './OrderPage.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const OrderPage = () => {
  return (
      <div className="app-wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <header>
            <Header />
          </header>
          <main className="main">
            <h2 className="order-header">Заказы</h2>
            <div className="order-card">
              <div className="order-card__header">
                <DropdownMenu />
              </div>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
  )
};

export default OrderPage;

