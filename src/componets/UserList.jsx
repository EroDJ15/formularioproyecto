import React from 'react'
import User from './User'

const Userlist = ({ users, deleteUser, editUser, changeShowModal }) => {
  return (
    <section className='grid gap-6'>
      {
        users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser} editUser={editUser} changeShowModal={changeShowModal} />)

      }




    </section>
  )

}

export default Userlist