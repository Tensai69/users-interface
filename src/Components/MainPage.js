import React, { useContext } from "react";
import { UsersContext } from "../DataProvider";
import { Link } from "react-router-dom";

import { Card, Avatar, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const MainPage = () => {
  const context = useContext(UsersContext);
  console.log(context);
  const { Meta } = Card;
  return (
    <>
      <div className="users_container">
        {context.users.map((user, index) => {
          return (
            <Card
              className="user"
              style={{ width: 350, marginTop: 16, size: "" }}
              actions={[
                <Link to={`/edit/${index}`}>
                  <EditOutlined key="edit" />
                </Link>,
                <DeleteOutlined
                  key="delete"
                  onClick={() => context.deleteUser(index)}
                />,
              ]}
            >
              <Meta
                avatar={<Avatar src={user.avatar_src} />}
                title={` Name: ${user.name} ${user.surname}
               Age:${user.age}`}
                description={user.bio}
              />
            </Card>
          );
        })}
      </div>
      <Link to="/create">
        <Button
          type="primary"
          shape="round"
          icon={<PlusCircleOutlined />}
          size="large"
        >
          Create New User
        </Button>
      </Link>
    </>
  );
};

export default MainPage;
