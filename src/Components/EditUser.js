import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UsersContext } from "../DataProvider";
import { Input, Button, InputNumber } from "antd";
import { CameraOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";

const EditUser = () => {
  let { id } = useParams();
  const context = useContext(UsersContext);
  let history = useHistory();
  const [editName, setEditName] = useState(context.users[id].name);
  const [editAge, setEditAge] = useState(context.users[id].age);
  const [editSurname, setEditSurname] = useState(context.users[id].surname);
  const [editBio, setEditBio] = useState(context.users[id].bio);
  const [editAva, setEditAva] = useState(context.users[id].avatar_src);

  const changeName = (e) => {
    setEditName(e.target.value);
  };
  const changeSurname = (e) => {
    setEditSurname(e.target.value);
  };
  const changeBio = (e) => {
    setEditBio(e.target.value);
  };
  const changeAva = (e) => {
    setEditAva(e.target.value);
  };
  const changeAge = (value) => {
    setEditAge(value);
  };

  const handleClick = (value) => {
    console.log(value);
    if (editName === "" || editSurname === "" || editAge === "") {
      return alert("r u gay?");
    } else {
      context.editUser(id, {
        name: editName,
        surname: editSurname,
        age: editAge,
        bio: editBio,
        avatar_src: editAva,
      });
      console.log(editName);
      history.push("");
    }
  };
  return (
    <div>
      <Input
        size="small"
        style={{ width: 300, textAlign: "center", margin: 5, marginTop: 30 }}
        placeholder="Name"
        prefix={<UserOutlined />}
        value={editName}
        onChange={changeName}
      />
      <Input
        size="small"
        style={{ width: 300, textAlign: "center", margin: 5 }}
        placeholder="Surname"
        prefix={<UserOutlined />}
        value={editSurname}
        onChange={changeSurname}
      />
      <InputNumber
        style={{ width: 150, textAlign: "center", margin: 5 }}
        min={1}
        max={150}
        prefix={editAge}
        placeholder="Age"
        value={editAge}
        onChange={changeAge}
      />
      <Input
        size="small"
        style={{ width: 300, textAlign: "center", margin: 5 }}
        placeholder="Avatar src"
        prefix={<CameraOutlined spin="true" />}
        value={editAva}
        onChange={changeAva}
      />
      <Input.TextArea
        rows={4}
        autosize={true}
        showCount
        maxLength={255}
        style={{ textAlign: "center", margin: 5 }}
        placeholder="little bio"
        value={editBio}
        onChange={changeBio}
      />

      <div>
        <Button
          type="primary"
          shape="round"
          icon={<EditOutlined />}
          size="small"
          onClick={handleClick}
        >
          Edit User
        </Button>
      </div>
    </div>
  );
};

export default EditUser;
