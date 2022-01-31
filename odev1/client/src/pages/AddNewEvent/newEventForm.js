import React from 'react';
import { Form, Input, Button, Select, message } from "antd";
import { useQuery,useMutation } from "@apollo/client";
import { ADD_NEW_EVENT, GET_LOCATIONS, GET_USERS } from './queries';
import { useHistory } from "react-router-dom";


const {Option}= Select;


function NewEventForm() {
  const history= useHistory();

  const { loading:loadUsers, data:users } = useQuery(GET_USERS);
  const { loading:loadLocations, data:locations } = useQuery(GET_LOCATIONS);
  
  const [addEvent,{ loading:eventload}] =useMutation(ADD_NEW_EVENT);

   const handleSubmit = async(values)=>{
    try {
        await addEvent({variables:values});
        message.success('Event başariyla eklendi.',3);
        history.push('/');
    } catch (error) {
        message.error('Event oluşumunda hata oluştu',3)
    }
};
  return (
    <Form
      name="PostEvent"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
         <Form.Item
        label="User"
        name="user_id"
        rules={[
          {
            required: true,
          },
        ]}
        disabled={eventload}
      >
        <Select
          placeholder="Select a user option"
          allowClear
        loading={loadUsers}
        >
            {users?.users.map(user =>(
                <Option key={user.id} value={user.id}>{user.fullName}</Option>
            ))}
          
        </Select>
         </Form.Item>

      <Form.Item
        label="Location"
        name="location_id"
        rules={[
          {
            required: true,
          },
        ]}
        disabled={eventload}
      >
        <Select
          placeholder="Select a location option"
          allowClear
         loading={loadLocations}
        >
            {locations?.locations.map(location =>(
                <Option key={location.id} value={location.id}>{location.place}</Option>
            ))}
          
        </Select>
      </Form.Item>


      <Form.Item
        label="Event Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your event name!",
          },
        ]}
        disabled={eventload}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input your description!",
          },
        ]}
        disabled={eventload}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
       label="DatePicker"
       name="time"
       disabled={eventload}>
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" loading={eventload}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );;
}

export default NewEventForm;
