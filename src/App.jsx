import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './componets/Header';
import ModalForm from './componets/ModalForm';
import axios from 'axios';
import UserList from './componets/UserList';

const BASE_URL = 'https://users-crud.academlo.tech';

function App() {
  const [isShowModal, setisShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isEditUser, setIsEditUser] = useState(null);

  const changeShowModal = () => {
    setisShowModal(!isShowModal);
  };

  const getAllUsers = () => {
    const url = BASE_URL + '/users/';
    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const createUser = (data) => {
    const url = BASE_URL + '/users/';
    axios
      .post(url, data)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };


  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`;
    axios
      .delete(url)
      .then(() => getAllUsers())
      .catch((error) => console.log(error));
  };

  const upDateUser = (formData, reset) => {
    const url = BASE_URL + `/users/${isEditUser.id}/`; // Corrección en la declaración de la URL
    axios
      .patch(url, formData)
      .then(() => { // Restablecer isEditUser a null después de una actualización exitosa
        getAllUsers();
        setIsEditUser(null);
        resetModalForm(reset)
      })
      .catch((error) => console.log(error));
  };

  const resetModalForm = (reset) => {
    setIsEditUser(null);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <><main className='font-Roboto'>
      <Header changeShowModal={changeShowModal} />
      <ModalForm
        changeShowModal={changeShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        getAllUsers={getAllUsers}
        isEditUser={isEditUser}
        upDateUser={upDateUser}
        resetModalForm={resetModalForm} />



      <UserList users={users} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsEditUser={setIsEditUser} />

    </main><footer class="flex flex-col items-center py-4">
        <p class="text-gray-400 text-xs font-semibold">
          &copy; 2023 Todos los derechos reservados
        </p>
        <a href="https://github.com/EroDJ15"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 text-xs font-semibold flex items-center mt-1 p-1">
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" class="w-4 h-4 mr-2 opacity-30" />
          Created by: Jerovic Pino
        </a>

      </footer></>

  );
}

export default App;
