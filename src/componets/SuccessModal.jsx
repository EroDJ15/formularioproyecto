import React from 'react';

const SuccessModal = ({ closeModal }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-4 rounded-lg grid gap-2'>
        <h3 className='font-bold text-2xl'>Usuario creado con éxito</h3>
        <button className='btn-primary' onClick={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
