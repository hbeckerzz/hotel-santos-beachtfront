import React from 'react';

const Infcontato = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Onde estamos?</h2>
        <div className="text-lg">
          <p>Av. Pres. Wilson, 50 CEP 11065-200, Gonzaga.</p>
          <p>Santos – São Paulo – Brasil</p>
          <p className="mt-2"><a href="tel:+551332667270" className="text-blue-500">Tel: +55 (13) 3266-7270</a></p>
        </div>
      </div>
    </div>
  );
};

export default Infcontato;
