import React from "react";
import './ErrorPage.scss';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainButton from "../MainButton/MainButton";

const ErrorPage = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <header>
          <Header />
        </header>
        <main className="main error-wrapper">
          <div className="error-page">
            <p className="error-page__error-code">500</p>
            <h2 className="error-page__header">Что-то пошло не так</h2>
            <p className="error-page__text">Попробуйте перезагрузить страницу</p>
            <MainButton btnText="Назад" btnClassName="btn btn_blue" />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
};

export default ErrorPage;
