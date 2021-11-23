import React, { FC } from 'react';
import './OrderPage.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OrderPageCardHeader from './OrderPageCardHeader/OrderPageCardHeader'
import CardPagination from '../CardPagination/CardPagination';
import OrderPageInfo from './OrderPageInfo/OrderPageInfo';

const OrderPage: FC = () => {
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
            <div className="order-card__shadow">
              <OrderPageCardHeader />
              <div className="order-card__info-wrapper">
                <OrderPageInfo />
              </div>
              <CardPagination />
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

