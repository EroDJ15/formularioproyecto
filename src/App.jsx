import { useEffect, useState } from 'react'
import './App.css'
import Header from './componets/Header'
import ModalForm from './componets/ModalForm'
import axios from 'axios'

const BASE_URL = 'https://users-crud.academlo.tech'

function App() {
  const [isShowModal, setisShowModal] = useState(false)

  const changeShowModal = () => {
    setisShowModal(!isShowModal)
  }

  const getAllUsers = () => {
    const url = BASE_URL + '/users/'
    axios
      .get(url)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error))
  }

  const createUser = (data) => {
    const url = BASE_URL + '/users/'
    axios
      .post(url, data)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className='font-Roboto'>
      <Header changeShowModal={changeShowModal} />
      <ModalForm changeShowModal={changeShowModal} isShowModal={isShowModal} createUser={createUser} getAllUsers={getAllUsers} />
    </main>
  )
}

export default App
