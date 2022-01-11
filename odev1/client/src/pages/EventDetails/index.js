import React from 'react'
import {  useParams } from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { GET_EVENT_DETAILS} from 'pages/EventDetails/queries';
import {  Card, Col, Row, Space, Spin ,Badge} from 'antd';
import EventParticipants from './EventParticipants';

import styles from './styles.module.css';



function EventDetails() {
  
  const {id} =  useParams();

    const { loading, error, data } = useQuery(GET_EVENT_DETAILS,{variables:{id}});

    if (loading) {
        return <Space size="large" ><Spin className={styles.loadingAlign} size="large" /></Space>;
      }
    
      if (error) return `Error! ${error.message}`;
    console.log(data)
   
    return (
     <div className="site-card-wrapper">
         <Row justify="center">
          
      
          
           <Col  xs={{span:24,offset:0}}  md={{span:16}}>
           <Badge.Ribbon text={data.event.time}>
             <Card key={data.event.id} hoverable bordered={true}>
                <Card.Meta  title={data.event.name} description={data.event.description}></Card.Meta>
                <h4> <span>Owner : </span>  {data.event.user.fullName}</h4>
               <p> <span>Place : </span>  {data.event.location.place}</p>
               
             </Card>
             </Badge.Ribbon>
           </Col>
            <EventParticipants eventId={id}></EventParticipants>
        
          </Row>
       </div>
       
    )
}

export default EventDetails
