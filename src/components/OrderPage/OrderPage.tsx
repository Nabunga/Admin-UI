import React, { FC } from 'react';
import './OrderPage.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OrderPageCardHeader from './OrderPageCardHeader/OrderPageCardHeader'
import CardPagination from '../CardPagination/CardPagination';
import OrderPageInfo from './OrderPageInfo/OrderPageInfo';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const OrderPage: FC = () => {

  const { selectedPeriod } = useTypedSelector(state => state.order)

  const convertDate = (date: any) => {
    const dateNow = Date.now()
    const oneDay = 86400000
    const day = dateNow - (oneDay * 1)
    const week = dateNow - (oneDay * 7)
    const month = dateNow - (oneDay * 30)
    const year = dateNow - (oneDay * 365)

    if (date === 'За сегодня') {
      return day
    }
    if (date === 'За неделю') {
      return week
    }
    if (date === 'За месяц') {
      return month
    }
    if (date === 'За год') {
      return year
    }
  }
  const getPeriod = convertDate(selectedPeriod)

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
              <OrderPageCardHeader getPeriod={getPeriod} />
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

