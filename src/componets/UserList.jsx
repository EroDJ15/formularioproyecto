import React from 'react';
import User from './User';

const Userlist = ({ users, deleteUser, changeShowModal, setIsEditUser }) => {
  return (
    <section className='grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6'>
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
