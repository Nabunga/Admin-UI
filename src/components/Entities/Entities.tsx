import React from "react";
import './Entities.scss';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Entities = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <header>
          <Header />
        </header>
        <main className="main">
          
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
};

export default Entities;