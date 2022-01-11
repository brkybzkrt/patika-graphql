import React from 'react'
import { useLazyQuery } from "@apollo/client";
import { GET_EVENT_PARTICIPANTS } from './queries';
import { Button, Divider, List, Spin } from 'antd';
import styles from './styles.module.css';

function EventParticipants({eventId}) {

    const [getEventParticipants, { loading, error, data }] = useLazyQuery(
        GET_EVENT_PARTICIPANTS,
        { variables: { eventId: eventId } }
      );


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
