import React from 'react';

const Quadrado = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-5 text-center">
          <h2 className="mt-10 text-2xl mb-6 text-gray-800">Acomodações</h2>
          <p className="mt-[-14px] text-lg leading-relaxed text-gray-600">
            O Hotel oferece 4 categorias confortáveis e bem equipadas, incluindo quartos padrão e suítes, com amenidades modernas e decoração elegante, para uma estadia relaxante e agradável.
          </p>
          <a href="../Acomodações/acomodações.html" className="inline-block py-2 px-4 bg-blue-300 text-black no-underline rounded-md mt-24 w-3/12 mx-auto hover:text-white">
            Conheça
          </a>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-5 text-center">
          <h2 className="mt-10 text-2xl mb-6 text-gray-800">Hotel</h2>
          <p className="mt-[-14px] text-lg leading-relaxed text-gray-600">
            Desfrute de uma perfeita harmonia entre acomodações confortáveis e praia a um passo de você.
          </p>
          <a href="../Hotel/Hotel.html" className="inline-block py-2 px-4 bg-blue-300 text-black no-underline rounded-md mt-24 w-3/12 mx-auto hover:text-white">
            Conheça
          </a>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-5 text-center">
          <h2 className="mt-10 text-2xl mb-6 text-gray-800">Lazer</h2>
          <p className="mt-[-14px] text-lg leading-relaxed text-gray-600">
            Além de aproveitar o melhor de Santos, no Hotel Santos Beachfront você pode usufruir de uma estrutura de lazer completa.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            São duas piscinas integradas de natação e com profundidade reservada para crianças.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Serviço de bar com petiscos e refrescantes drinks.
          </p>
          <a href="../Lazer/Lazer.html" className="inline-block py-2 px-4 bg-blue-300 text-black no-underline rounded-md mt-6 w-3/12 mx-auto hover:text-white">
            Conheça
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quadrado;
