import { useEffect, useState } from "react";
import "./App.css";
import useUserCrud from "./hooks/useUserCrud";
import User from "./components/User";
import Form from "./components/Form";

function App() {
  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUserbyId,
    userCreated,
  } = useUserCrud();
  const [formClose, setFormClose] = useState(true);
  const [updateInfo, setUpdateInfo] = useState();
  const [userCreatedModal, setUserCreatedModal] = useState(false);
  const [userChangesModal, setUserChangesModal] = useState(false);
  const [userChanges, setUserChanges] = useState();
  const [delteOrUpdate, setDelteOrUpdate] = useState(true); //True if its delete false if update

  useEffect(() => {
    getAllUsers();
  }, []);
  const handleModal = () => {
    setFormClose(false);
  };
  const exitUserChangesModal = () => {
    setUserChangesModal(false);
  };
  const exitUserCreatedModal = () => {
    setUserCreatedModal(false);
  };
  return (
    <div className="App">
      <div className="app__header">
        <h1 className="app__title">Users</h1>
        <button className="app__btn" onClick={handleModal}>
          + Create New User
        </button>
      </div>
      <Form
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserbyId={updateUserbyId}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
        setUserChangesModal={setUserChangesModal}
        setUserChanges={setUserChanges}
        setUserCreatedModal={setUserCreatedModal}
      />
      <div className="user__container">
        {users?.map((user) => (
          <User
            user={user}
            key={user.id}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            setFormClose={setFormClose}
            setUserChangesModal={setUserChangesModal}
            setUserChanges={setUserChanges}
            userChanges={userChanges}
            setDelteOrUpdate={setDelteOrUpdate}
          />
        ))}
      </div>
      {userChanges ? (
        <div
          className={`userModalContainer ${userChangesModal ? "" : "close"}`}
        >
          <div className="user__modal">
            <h2 className="user__modal__Title">
              User {delteOrUpdate ? "deleted" : "updated"}
            </h2>
            <span className="exit" onClick={exitUserChangesModal}>
              X
            </span>
            <p className="user__modal__info">
              The user{" "}
              <span className="user__modal__name">
                {userChanges.first_name} {userChanges.last_name}
              </span>{" "}
              has been {delteOrUpdate ? "deleted" : "updated"} succesffuly
            </p>
            <button className="user__modal__btn" onClick={exitUserChangesModal}>
              Accept
            </button>
          </div>
        </div>
      ) : (
        <span></span>
      )}
      {userCreatedModal ? (
        <div
          className={`userModalContainer ${userCreatedModal ? "" : "close"}`}
        >
          <div className="user__modal">
            <h2 className="user__modal__Title">
              User {userCreated ? "Created" : "Could not be created"}
            </h2>
            <span className="exit" onClick={exitUserCreatedModal}>
              X
            </span>
            <p className="user__modal__info">
              The user{" "}
              <span className="user__modal__name">
                {userCreated
                  ? `${userChanges.first_name} ${userChanges.last_name}`
                  : ""}
              </span>{" "}
              has been {userCreated ? "Created" : "Could not be created"}{" "}
              succesffuly
            </p>
            <button className="user__modal__btn" onClick={exitUserCreatedModal}>
              Accept
            </button>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default App;
