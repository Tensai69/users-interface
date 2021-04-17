import React, { useState, useContext } from "react";
import { Input, Button, InputNumber } from "antd";

import {
  PlusCircleOutlined,
  UserOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { UsersContext } from "../DataProvider";
import { useHistory } from "react-router-dom";

const CreateUser = () => {
  let history = useHistory();
  const context = useContext(UsersContext);
  const [inputName, setName] = useState("");
  const [inputAge, setAge] = useState(1);
  const [inputSurname, setSurname] = useState("");
  const [inputBio, setBio] = useState("");
  const [inputAva, setAva] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  };
  const addSurname = (e) => {
    setSurname(e.target.value);
  };
  const addBio = (e) => {
    setBio(e.target.value);
  };
  const addAva = (e) => {
    setAva(e.target.value);
  };
  const addAge = (value) => {
    setAge(value);
  };

  const handleClick = () => {
    if (inputName === "" || inputSurname === "" || inputAge === "") {
      return alert("r u gay?");
    } else {
      context.addUser({
        name: inputName,
        surname: inputSurname,
        age: inputAge,
        bio: inputBio,
        avatar_src: inputAva,
      });
      console.log(inputName);
      history.push("");
    }
  };
  console.log(context);
  return (
    <>
      <div>
        <Input
          size="small"
          style={{ width: 300, textAlign: "center", margin: 5, marginTop: 30 }}
          placeholder="Name"
          prefix={<UserOutlined />}
          onChange={addName}
        />
        <Input
          size="small"
          style={{ width: 300, textAlign: "center", margin: 5 }}
          placeholder="Surname"
          prefix={<UserOutlined />}
          onChange={addSurname}
        />
        <InputNumber
          style={{ width: 150, textAlign: "center", margin: 5 }}
          min={1}
          max={150}
          prefix={"Age"}
          placeholder="Age"
          onChange={addAge}
        />
        <Input
          size="small"
          style={{ width: 300, textAlign: "center", margin: 5 }}
          placeholder="Avatar src"
          prefix={<CameraOutlined spin="true" />}
          onChange={addAva}
        />
        <Input.TextArea
          rows={4}
          autosize={true}
          showCount
          maxLength={255}
          style={{ textAlign: "center", margin: 5 }}
          placeholder="little bio"
          onChange={addBio}
        />
      </div>
      <div>
        <Button
          type="primary"
          shape="round"
          icon={<PlusCircleOutlined />}
          size="small"
          onClick={handleClick}
        >
          Create New User
        </Button>
      </div>
    </>
  );
};

export default CreateUser;
