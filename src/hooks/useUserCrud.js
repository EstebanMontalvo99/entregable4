import axios from "axios";
import { useState } from "react";

const useUserCrud = () => {
  const [users, setUsers] = useState();
  const [userCreated, setUserCreated] = useState();
  //GET
  const url = "https://users-crud.academlo.tech/users/";
  const getAllUsers = () => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  //POST
  const createNewUser = (data) => {
    axios
      .post(url, data)
      .then((res) => {
        setUserCreated(true);
        getAllUsers();
      })
      .catch((err) => {
        setUserCreated(false);
        console.log(err);
      });
  };

  //DELETE
  const deleteUser = (id) => {
    const urlDelete = `${url}${id}/`;
    axios
      .delete(urlDelete)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
  };

  //UPDATE
  const updateUserbyId = (id, data) => {
    const urlUpdate = `${url}${id}/`;
    axios
      .patch(urlUpdate, data)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
  };

  return {
    users,
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUserbyId,
    userCreated,
  };
};

export default useUserCrud;
