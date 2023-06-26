import React, { useState } from 'react';
import SuccessModal from './SuccessModal';
import { useForm } from 'react-hook-form';

function ModalForm({ isShowModal, changeShowModal, createUser, getAllUsers, isUserToUpdate }) {
  const { register, handleSubmit, reset } = useForm();

  function handleCloseModal() {
    changeShowModal();
  }

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    usuario: '',
    password: '',
    confirmPassword: '',
    birthday: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (formData.first_name.trim() === '') {
      errors.first_name = 'Ingrese sus nombres';
    }
    if (formData.last_name.trim() === '') {
      errors.last_name = 'Ingrese sus apellidos';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Ingrese su correo';
    }
    if (formData.usuario.trim() === '') {
      errors.usuario = 'Ingrese su usuario';
    }
    if (formData.password.trim() === '') {
      errors.password = 'Ingrese su contraseña';
    }
    if (formData.confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirme su contraseña';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (formData.birthday === '') {
      errors.birthday = 'Ingrese su fecha de cumpleaños';
    }

    return errors;
  };

  const handleFormSubmit = (formData) => {
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    createUser(formData);
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      usuario: '',
      password: '',
      confirmPassword: '',
      birthday: '',
    });
    setFormErrors({});
    reset();
    getAllUsers();
    handleCloseModal(); // Cerrar el formulario al cerrar el modal de éxito
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? 'opacity-100 visible' : 'invisible opacity-0'} transition-opacity`}>
      {showSuccessModal ? (
        <SuccessModal closeModal={handleSuccessModalClose} />
      ) : (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-4 rounded-lg grid gap-2'>
            <h3 className='font-bold text-2xl text-center'>{isUserToUpdate ?
              'Actualizar usuario' :
              'Crear nuevo usuario'}</h3>
            <form className='flex flex-col gap-4 bg-white w-80 relative' onSubmit={handleSubmit(handleFormSubmit)}>
              <input
                type='text'
                {...register('first_name')}
                name='first_name'
                placeholder='Nombre'
                className={`border ${formErrors.first_name ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.first_name}
                onChange={handleChange}
              />
              <input
                type='text'
                {...register('last_name')}
                name='last_name'
                placeholder='Apellidos'
                className={`border ${formErrors.last_name ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.last_name}
                onChange={handleChange}
              />
              <input
                type='email'
                {...register('email')}
                name='email'
                placeholder='Correo'
                className={`border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type='text'
                name='usuario'
                placeholder='Usuario'
                className={`border ${formErrors.usuario ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.usuario}
                onChange={handleChange}
              />
              <input
                type='password'
                {...register('password')}
                name='password'
                placeholder='Contraseña'
                className={`border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type='password'
                {...register('confirmPassword')}
                name='confirmPassword'
                placeholder='Confirmar contraseña'
                className={`border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {formErrors.confirmPassword && <p className='text-red-500 text-xs font-bold'>{formErrors.confirmPassword}</p>}
              <input
                type='date'
                {...register('birthday')}
                name='birthday'
                placeholder='Fecha de cumpleaños'
                className={`border ${formErrors.birthday ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg text-sm bg-gray-100`}
                value={formData.birthday}
                onChange={handleChange}
              />
              <button onClick={handleCloseModal} type='button' className='absolute -top-12 -right-2 text-1xl hover:text-secondary'>
                <i className='bx bx-x'></i>
              </button>
              <button className='btn-primary' type='submit'>
                Crear usuario
              </button>
              {Object.keys(formErrors).length > 0 && (
                <p className='text-red-500 text-xs font-bold text-center mt-2'>Por favor, rellene todos los campos correctamente.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ModalForm;
