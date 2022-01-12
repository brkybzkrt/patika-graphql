import React, { useEffect } from 'react'
import { useLazyQuery } from "@apollo/client";
import { GET_EVENT_PARTICIPANTS, PARTICIPANTS_SUBSCRIPTION } from './queries';
import { Button, Divider, List, Spin } from 'antd';
import styles from './styles.module.css';

function EventParticipants({eventId}) {

    const [getEventParticipants, { loading, error, data,subscribeToMore,called }] = useLazyQuery(
        GET_EVENT_PARTICIPANTS,
        { variables: { eventId: eventId } }
      );

      useEffect(() => {

        if(!loading && called) {

            subscribeToMore({ 
          document:PARTICIPANTS_SUBSCRIPTION,
          updateQuery:(prev,{subscriptionData})=>{
            if(!subscriptionData.data) return prev;

            return {
              participants:[...prev.participants,subscriptionData.data.participantAdded]
                
              }
            }
          }
        )

      }
        


      }, [subscribeToMore,loading,called]);

    if (error) return `Error! ${error.message}`;

    return (
        <>
        <Divider>Participants</Divider>
  
        {!data && (
          <Button
            loading={loading && <Spin size="large" />}
            onClick={() => getEventParticipants()}
            className={styles.showCommentsButton}
          >
            Show Participants
          </Button>
        )}
  
        {!loading && data===null }
  
        {!loading && data && (
          <List
            className="comment-list"
            //header={`${data.length} replies`}
            itemLayout="horizontal"
            dataSource={data.participants}
            renderItem={(item) => (
              <li>
                <h4>{item.user.fullName}</h4>
              </li>
            )}
          />
        )}
      </>
    )
}

export default EventParticipants
