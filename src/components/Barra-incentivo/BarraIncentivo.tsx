import React from 'react';

const BarraIncentivo = () => {
  return (
    <div className="bg-blue-500 text-black px-4 py-2 flex items-center justify-center fixed bottom-0 left-0 w-full z-50">
      <p className="text-lg font-semibold lg:text-xl mr-4 lg:mr-8">Reserve agora para obter as melhores tarifas!</p>
      <button className="text-white font-semibold bg-blue-700 rounded-full px-6 py-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">Faça uma reserva</button>
    </div>
  );
};

export default BarraIncentivo;
