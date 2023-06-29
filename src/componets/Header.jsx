import React from 'react';

const Header = ({ changeShowModal }) => {
  const handleClickShowModal = () => {
    changeShowModal();
  };

  return (
    <section className='flex flex-wrap gap-4 justify-between p-2 py-2 items-center justify-items-center '>
      <h1 className="font-bold text-2xl">Usuarios</h1>
      <button className='btn-primary bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClickShowModal}>
        <i className='bx bx-plus'></i>Crear nuevo usuario
      </button>
    </section>





  );
};

export default Header;

