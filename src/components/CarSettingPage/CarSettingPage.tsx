import React from "react";
import './CarSettingPage.scss';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CarCard from "./CarCard/CarCard";
import CarSettings from "./CarSettings/CarSettings";

const CarSettingPage = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <header>
          <Header />
        </header>
        <main className="main">
          <h2 className="order-header">Карточка автомобиля</h2>
          <div className="car-setting__content">
            <CarCard />
            <CarSettings />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
};

export default CarSettingPage;