import React from 'react';

const ReservaComponente = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container w-4/5 lg:w-3/5 h-4/5 flex flex-col lg:flex-row shadow-lg">
        <div className="form-image lg:w-1/2 w-full flex justify-center items-center bg-blue-500 p-4">
          <img src="https://i.ibb.co/P9NzM1T/imagem-2024-03-25-132536824-removebg-preview.png" alt="Hotel Icon" width="160" />
        </div>
        <div className="form lg:w-1/10 w-full bg-white flex flex-col justify-center items-center p-8">
          <div className="form-header mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Reserva</h1>
          </div>
          <div className="input-group">
            <div className="input-box mb-4">
              <label htmlFor="nome" className="text-sm font-semibold text-gray-800 mr-4">Nome completo</label>
              <input id="nome" type="text" name="nome" placeholder="Digite seu nome completo" className="input-field" required />
            </div>
            <div className="input-box mb-4">
              <label htmlFor="cpf_passaporte" className="text-sm font-semibold text-gray-800 mr-4">CPF/Passaporte</label>
              <input id="cpf_passaporte" type="text" name="cpf_passaporte" placeholder="Digite seu CPF ou Passaporte" className="input-field" required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box mb-4">
              <label htmlFor="email" className="text-sm font-semibold text-gray-800 mr-4">E-mail</label>
              <input id="email" type="email" name="email" placeholder="Digite seu e-mail" className="input-field" required />
            </div>
            <div className="input-box mb-4">
              <label htmlFor="telefone" className="text-sm font-semibold text-gray-800 mr-4">Telefone</label>
              <input id="telefone" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" className="input-field" required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box mb-4">
              <label htmlFor="data_nascimento" className="text-sm font-semibold text-gray-800 mr-4">Data de Nascimento</label>
              <input id="data_nascimento" type="date" name="data_nascimento" className="input-field" required />
            </div>
            <div className="input-box mb-4">
              <label htmlFor="pais" className="text-sm font-semibold text-gray-800 mr-4">País</label>
              <input id="pais" type="text" name="pais" placeholder="Digite seu País" className="input-field" required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box mb-4">
              <label htmlFor="estado" className="text-sm font-semibold text-gray-800 mr-4">Estado</label>
              <input id="estado" type="text" name="estado" placeholder="Digite seu Estado" className="input-field" required />
            </div>
            <div className="input-box mb-4">
              <label htmlFor="cidade" className="text-sm font-semibold text-gray-800 mr-4">Cidade</label>
              <input id="cidade" type="text" name="cidade" placeholder="Digite sua Cidade" className="input-field" required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box mb-4">
              <label htmlFor="endereco" className="text-sm font-semibold text-gray-800 mr-4">Endereço Residencial</label>
              <input id="endereco" type="text" name="endereco" placeholder="Digite seu Endereço" className="input-field" required />
            </div>
          </div>
          <div className="gender-inputs mb-4">
            <div className="gender-title">
              <h6 className="text-sm font-semibold text-gray-800">Gênero</h6>
            </div>
            <div className="gender-group flex">
              <div className="gender-input mr-4">
                <input type="radio" id="female" name="gender" />
                <label htmlFor="female" className="text-sm font-medium text-gray-800">Feminino</label>
              </div>
              <div className="gender-input mr-4">
                <input type="radio" id="male" name="gender" />
                <label htmlFor="male" className="text-sm font-medium text-gray-800">Masculino</label>
              </div>
              <div className="gender-input mr-4">
                <input type="radio" id="other" name="gender" />
                <label htmlFor="other" className="text-sm font-medium text-gray-800">Outro</label>
              </div>
              <div className="gender-input">
                <input type="radio" id="prefer_not_to_say" name="gender" />
                <label htmlFor="prefer_not_to_say" className="text-sm font-medium text-gray-800">Prefiro não dizer</label>
              </div>
            </div>
          </div>
          <div className="send-button">
            <button className="bg-blue-500 text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservaComponente;
