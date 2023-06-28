import React from 'react';
import User from './User';

const Userlist = ({ users, deleteUser, changeShowModal, setIsEditUser }) => {
  return (
    <section className='grid gap-6'>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsEditUser={setIsEditUser}
        />
      ))}
    </section>
  );
};

export default Userlist;
