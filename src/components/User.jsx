import React from "react";
import "./styles/userCard.css";

const User = ({
  user,
  deleteUser,
  setUpdateInfo,
  setFormClose,
  setUserChangesModal,
  setUserChanges,
  setDelteOrUpdate,
}) => {
  const handleDelete = () => {
    setUserChanges(user);
    setDelteOrUpdate(true);
    setUserChangesModal(true);
    deleteUser(user.id);
    console.log("Se ELIMINO");
  };
  const updateHandler = () => {
    setUpdateInfo(user);
    setDelteOrUpdate(false);
    setFormClose(false);
  };

  return (
    <article className="user">
      <h2 className="user__name">
        {user.first_name} {user.last_name}
      </h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__label">Email: </span>
          <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item">
          <span className="user__label">Birthday: </span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer">
        <button className="user__btn user__delete" onClick={handleDelete}>
          <i className="bx bx-trash user__icon"></i>
        </button>
        <button className="user__btn user__edit" onClick={updateHandler}>
          <i className="bx bx-edit-alt user__icon"></i>
        </button>
      </footer>
    </article>
  );
};

export default User;
