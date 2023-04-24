import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";
import "./styles/form.css";

const Form = ({
  createNewUser,
  updateInfo,
  updateUserbyId,
  setUpdateInfo,
  setFormClose,
  formClose,
  setUserChangesModal,
  setUserChanges,
  setUserCreatedModal,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    if (updateInfo) {
      setUserChanges(data);
      updateUserbyId(updateInfo.id, data);
      setUpdateInfo();
      reset(defaultValues());
      setUserChangesModal(true);
    } else {
      createNewUser(data);
      setUserCreatedModal(true);
      setUserChanges(data);
      reset(defaultValues());
    }
  };
  const handleExit = () => {
    setFormClose(true);
    setUpdateInfo();
    reset(defaultValues());
  };
  const handleCreate = () => {
    setFormClose(true);
  };

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  return (
    <div className={`form__container ${formClose ? "close" : ""}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h3 className="form__title">
          <span onClick={handleExit} className="exit">
            X
          </span>
          {updateInfo ? "Update User Info" : "Create New User"}
        </h3>
        <div className="form__item">
          <label className="form__label" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="form__input"
            {...register("email")}
            type="email"
            id="email"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="form__input"
            {...register("password")}
            type="password"
            id="password"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="firstName">
            First Name:{" "}
          </label>
          <input
            className="form__input"
            {...register("first_name")}
            type="text"
            id="firstName"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="lastName">
            Last Name:{" "}
          </label>
          <input
            className="form__input"
            {...register("last_name")}
            type="text"
            id="lastName"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="birthday">
            Birthday:{" "}
          </label>
          <input
            className="form__input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>
        <button onClick={handleCreate} className="form__btn">
          {updateInfo ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Form;
