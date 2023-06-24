import React from 'react'

const Header = ({ changeShowModal }) => {

  const handleClickShowModal = () => {
    changeShowModal()
  }

  return (
    <section className='flex gap-4 justify-between p-4 py-4 items-center'>
      <h1 className='font-bold text-2xl'>Usuarios</h1>
      <button className='btn-primary  hover:bg-tertiary' onClick={handleClickShowModal}>
        <i className='bx bx-plus'></i>Crear nuevo usuario
      </button>
    </section>
  )
}

export default Header
