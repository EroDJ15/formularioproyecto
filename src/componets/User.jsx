import React from 'react';

const User = ({ user, deleteUser, setIsEditUser, changeShowModal }) => {
  const handleClickDelete = () => {
    const confirmDelete = window.confirm('¿Está seguro que desea eliminar el usuario?');
    if (confirmDelete) {
      deleteUser(user.id);
      window.alert('Usuario eliminado con éxito');
    }
  };

  const handleClickUpdate = () => {
    changeShowModal();
    setIsEditUser(user);
  };

  const userBirthday = new Date(user.birthday);
  userBirthday.setDate(userBirthday.getDate() + 1);
  const formattedBirthday = userBirthday.toLocaleDateString();

  return (
    <section className=' bg-white shadow-md p-1 mx-auto rounded'>
      <div className='p-2 py-2 text-center'>
        <h4 className='font-bold'>Nombre</h4>
        <span>{user.first_name} {user.last_name}</span>
        <div>
          <h5 className='font-semibold text-center'>Correo</h5>
          <span>{user.email}</span>
        </div>
        <div>
          <h5 className='hidden'>Usuario</h5>
          <span>{user.username}</span>
        </div>
        <div>
          <h5 className='font-semibold text-center'>Contraseña</h5>
          <span>{user.password.replace(/./g, '*')}</span>
        </div>
        <div>
          <h5 className='hidden'>Confirmar contraseña</h5>
          <span>{user.confirmPassword}</span>
        </div>
        <div className='items-center'>
          <h5 className='font-semibold text-center'>Cumpleaños</h5>
          <span className='font-semibold text-center'>{formattedBirthday}</span>
          {user.birthday && <i className='bx bx-gift p-2 hover:text-blue-700 font-semibold'></i>}
        </div>
        <section className='rounded-md gap-4 flex justify-between p-2 py-2'>
          <button onClick={handleClickUpdate} className='bg-primary hover:bg-blue-700 text-white font-bold py-0 px-2 rounded ml-2 mt-3'>
            <i className='bx bx-edit'></i>
          </button>
          <button onClick={handleClickDelete} className='bg-secondary hover:bg-red-700 text-white font-bold py-0 px-2 rounded ml-2 mt-3'>
            <i className='bx bx-trash'></i>
          </button>
        </section>
      </div>
    </section>
  );
};

export default User;
