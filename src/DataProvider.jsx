import React, { createContext, useState } from "react";

const UsersContext = createContext([]);
const DataProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "John",
      surname: "Johnoff",
      age: 23,
      bio:
        "He is addicted to video games, something which his friend Norma Hana Ashton pointed out when he was" +
        " 15. The problem intensified in 2014. In 2020, John lost his job as a sous chef as a result of his addiction.",
      avatar_src:
        "https://pt-static.z-dn.net/files/d86/18083144c4c136c8af429c453300f01e.jpg",
    },
    {
      name: "Florence",
      surname: "Smyth",
      age: 52,
      bio:
        "A 52-year-old manufacturer is traumatised by the loss of her right arm when she was thirteen. She has beautiful, white eyes. She comes from a strict family. On Mondays, she likes to find mysteries to solve.",
      avatar_src:
        "https://image.shutterstock.com/image-photo/14082018-riga-latvia-closeup-portrait-600w-1627277812.jpg",
    },
    {
      name: "Python",
      surname: "Pythonoff",
      age: 43,
      bio:
        "He is an Egyptian Jedi who defines himself as bisexual. He started studying food science at college" +
        " but never finished the course. He is allergic to gluten.",
      avatar_src:
        "https://sun1-87.userapi.com/s/v1/ig1/HrE6XXbEGVwFwd-bABMSH7JmYUpiFV5_zVoUQeYOk97L6gpAxMTpEldppmpVok8tC0hxaVe_.jpg?size=200x0&quality=96&crop=906,0,1179,1179&ava=1",
    },
    {
      name: "Michelle",
      surname: "Myers",
      age: 24,
      bio:
        "A 24-year-old software developer is traumatised by the loss of her right leg when she was six. She usually wears a bullet-proof vest. She strongly dislikes anteaters. She has been wrongly accused of hijacking a lorry.",
      avatar_src:
        "https://image.shutterstock.com/image-photo/outdoors-portrait-beautiful-young-girl-600w-613990049.jpg",
    },
    {
      name: "Isaiah ",
      surname: "Rogers",
      age: 20,
      bio:
        "A twenty-year-old man is traumatised by the loss of his friend when he was nine. He looks relatively fit. His biggest fear is being killed by a dinosaur. On Mondays, he likes to go to the zoo.",
      avatar_src: "",
    },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  const editUser = (id, user) => {
    let newUsers = [...users];
    newUsers[id] = user;
    setUsers(newUsers);
  };
  const deleteUser = (id) => {
    const newUsers = users.filter((user, index) => index !== id);
    setUsers(newUsers);
    console.log(users);
  };

  return (
    <UsersContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {props.children}
    </UsersContext.Provider>
  );
};
export { UsersContext };
export default DataProvider;
