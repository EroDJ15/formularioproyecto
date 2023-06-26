import React from 'react';

const User = ({ user, deleteUser, editUser, changeShowModal }) => {
  const handleClickDelete = () => {
    const confirmDelete = window.confirm('¿Está seguro que desea eliminar el usuario?');
    if (confirmDelete) {
      deleteUser(user.id);
    }
  };

  const handleClickUpdate = () => (
    changeShowModal()
  )

  const hasBirthday = user.birthday !== null && user.birthday !== undefined;

  const handleClickEdit = () => {
    editUser(user.id);
  };

  return (
    <article className='p-2 py-4'>
      <h4 className='font-bold'>Nombre</h4>
      <span>{user.first_name} {user.last_name}</span>
      <div>
        <h5 className='font-semibold'>Correo</h5>
        <span>{user.email}</span>
      </div>
      <div>
        <h5 className='hidden'>Usuario</h5>
        <span>{user.username}</span>
      </div>
      <div>
        <h5 className='font-semibold'>Contraseña</h5>
        <span>{user.password.replace(/./g, '*')}</span>
      </div>
      <div>
        <h5 className='hidden'>Confirmar contraseña</h5>
        <span>{user.confirmPassword}</span>
      </div>
      <div>
        <h5 className='font-semibold'>Cumpleaños</h5>
        <span>{user.birthday ? new Date(user.birthday).toLocaleDateString() : 'no info'}</span>
        {hasBirthday && <i className='bx bx-gift p-2 hover:text-primary'></i>}
      </div>
      <section className='rounded-md gap-4'>
        <button onClick={handleClickUpdate}>
          <i className='bx bx-edit hover:text-secondary'></i>
        </button>
        <button onClick={handleClickDelete} className='ml-2'>
          <i className='bx bx-trash hover:text-secondary'></i>
        </button>
      </section>
    </article>
  );
};

export default User;
