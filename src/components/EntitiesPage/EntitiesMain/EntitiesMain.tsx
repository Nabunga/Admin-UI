import React from "react";
import './EntitiesMain.scss';
import { Table } from 'antd';

const EntitiesMain = () => {

  const data = [
    {
      key: 1,
      Header: 19.291,
    },
    {
      key: 2,
      Header: 19.291,
    },
    {
      key: 2,
      Header: 19.291,
    },
    {
      key: 2,
      Header: 19.291,
    },
    {
      key: 2,
      Header: 19.291,
    },
    {
      key: 2,
      Header: 19.291,
    },
    {
      key: 2,
      Header: 19.291,
    },
    
  ];

  const scroll = {
    x: 1062,
    y: 300,
  }

  return (
    <Table dataSource={data} pagination={false} scroll={scroll}>
      <Table.Column key="1" title="Header" dataIndex="Header"/>
      <Table.Column key="2" title="Header" dataIndex="Header"/>
      <Table.Column key="3" title="Header" dataIndex="Header"/>
      <Table.Column key="4" title="Header" dataIndex="Header"/>
      <Table.Column key="5" title="Header" dataIndex="Header"/>
      <Table.Column key="6" title="Header" dataIndex="Header"/>
      <Table.Column key="7" title="Header" dataIndex="Header"/>
    </Table>
  )
};

export default EntitiesMain;