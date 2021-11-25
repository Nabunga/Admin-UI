import React, { FC, useEffect } from "react";
import './EntitiesPage.scss';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardHeader from "../CardHeader/CardHeader";
import MainButton from "../MainButton/MainButton";
import EntitiesMain from "./EntitiesMain/EntitiesMain";
import { useDispatch } from "react-redux";
import { axiosInstanse } from "../../apis/axios";
import { EntitiesActionTypes } from "../../store/types/entities";
import EntitiesPagination from "./EntitiesPagination/EntitiesPagination";

const EntitiesPage: FC = () => {
  const dispatch = useDispatch()

  const getCategory = () => {
    return async (dispatch: any) => {
      try {
        const response = await axiosInstanse.get('/db/category')
        dispatch({ type: EntitiesActionTypes.ENTITIES_SET_CATEGORY, payload: response.data.data })
      } catch (error) {
        alert(error)
      }
    }
  }

  const getAllCars = () => {
    return async (dispatch: any) => {
      try {
        const response = await axiosInstanse.get('/db/car', {
          params: {
            limit: 20,
            page: 0
          }
        })
        dispatch({ type: EntitiesActionTypes.ENTITIES_SET_ALL_CARS, payload: response.data.data })
        dispatch({ type: EntitiesActionTypes.ENTITIES_SET_CARS_COUNT, payload: response.data.count })
      } catch (error) {
        alert(error)
      }
    }
  }  

  const rejectHandler = () => {
    dispatch({type: EntitiesActionTypes.ENTITIES_SET_CARS_BY_CATEGORY, payload: []})
    dispatch({type: EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY_NAME, payload: "Любая"})
  }

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getAllCars())
  }, [dispatch])

  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <header>
          <Header />
        </header>
        <main className="main">
          <h2 className="order-header">Список авто</h2>
          <div className="order-card__shadow">
            <CardHeader
              rejectBtn={<MainButton btnText="Отмена" btnClassName="btn btn_red btn_red-entities" clickHandle={rejectHandler} />}
            />
            <EntitiesMain />
            <EntitiesPagination />
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