import React, { FC } from "react";
import './EntitiesMain.scss';
import { Table } from 'antd';
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const EntitiesMain: FC = () => {

  const { allCars,carsByCategory } = useTypedSelector(state => state.entities)

  const renderedAllCars = allCars?.map((car) => {
    return {
      key: car.id,
      id: car.id,
      modelCar: car.name,
      classCar: car.categoryId,
      regSign: car.number,
      minPrice: car.priceMin,
      maxPrice: car.priceMax,
      colors: car.colors,
      description: car.description,
      thumbnail: car.thumbnail,
    }
  })

  const renderedCarsByCategory = carsByCategory?.map((car) => {
    return {
      key: car.id,
      id: car.id,
      modelCar: car.name,
      classCar: car.categoryId,
      regSign: car.number,
      minPrice: car.priceMin,
      maxPrice: car.priceMax,
      colors: car.colors,
      description: car.description,
      thumbnail: car.thumbnail,
    }
  })

  const columns = [
    {
      title: 'Модель',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (thumbUrl: any) => (
        <img
          src={(thumbUrl?.path.includes('base64')) ? thumbUrl.path : 'https://api-factory.simbirsoft1.com' + thumbUrl.path}
          alt="car"
          style={{ height: '30px' }}
        />
      ), 
    },
    {
      title: 'Название',
      dataIndex: 'modelCar',
      key: 'modelCar',
    },
    {
      title: 'Категория',
      dataIndex: 'classCar',
      key: 'classCar',
      render: (categoryId: any) => categoryId?.name
    },
    {
      title: 'Номер',
      key: 'regSign',
      dataIndex: 'regSign',
    },
    {
      title: 'Мин. цена',
      key: 'minPrice',
      dataIndex: 'minPrice',
    },
    {
      title: 'Максимальная цена',
      key: 'maxPrice',
      dataIndex: 'maxPrice',
    },
  ];

  const scroll = {
    x: 1062,
    y: 300,
  }

  return (
    <Table dataSource={carsByCategory.length === 0 ? renderedAllCars : renderedCarsByCategory} pagination={false} scroll={scroll} columns={columns} />
  )
};

export default EntitiesMain;