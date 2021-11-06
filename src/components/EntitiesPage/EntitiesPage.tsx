import React from "react";
import './EntitiesPage.scss';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OrderPageHeader from "../OrderPage/OrderPageHeader/OrderPageHeader";
import MainButton from "../MainButton/MainButton";
import EntitiesMain from "./EntitiesMain/EntitiesMain";
import OrderPagination from "../OrderPage/OrderPagination/OrderPagination";

const EntitiesPage = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <header>
          <Header />
        </header>
        <main className="main">
          <div className="order-card__shadow">
            <OrderPageHeader
              dropdownTextOne="Field"
              dropdownTextTwo="Field"
              dropdownTextThree="Field"
              dropdownTextFour="Field"
              rejectBtn={<MainButton btnText="Отмена" btnClassName="btn btn_red btn_red-entities" />}
            />
            <EntitiesMain />
            <OrderPagination />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
};

export default EntitiesPage;