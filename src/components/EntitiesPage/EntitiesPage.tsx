import React from "react";
import './EntitiesPage.scss';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardHeader from "../CardHeader/CardHeader";
import MainButton from "../MainButton/MainButton";
import EntitiesMain from "./EntitiesMain/EntitiesMain";
import CardPagination from "../CardPagination/CardPagination";

const EntitiesPage = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <header>
          <Header />
        </header>
        <main className="main">
          <h2 className="order-header">Entities</h2>
          <div className="order-card__shadow">
            <CardHeader
              dropdownTextOne="Field"
              dropdownTextTwo="Field"
              dropdownTextThree="Field"
              dropdownTextFour="Field"
              rejectBtn={<MainButton btnText="Отмена" btnClassName="btn btn_red btn_red-entities" />}
            />
            <EntitiesMain />
            <CardPagination />
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