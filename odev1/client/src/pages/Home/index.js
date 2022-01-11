import React from "react";
import { Spin, Space, List } from 'antd';


import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "./queries";
import { NavLink } from "react-router-dom";




function Home() {
  
  const { loading, error, data } = useQuery(GET_EVENTS);

 

  if (loading) {
    return <Space size="middle"><Spin size="large" /></Space>
  }

  if (error) return `Error! ${error.message}`;



  return (
    <div className="">
      <List
      gutter={16}
      column= {4}
      size="large"
      header={<h3>Events</h3>}
      bordered
      dataSource={data.events}
      renderItem={item => (
      <List.Item > 
        <List.Item.Meta
          
          title={<NavLink to={`/event-details/${item.id}`}>{item.name}</NavLink> }
          description={item.description}
        />
        <p>{item.time}</p>
      
      </List.Item>)
      
    
    
    }
    />
    
    </div>
  );
}

export default Home;
