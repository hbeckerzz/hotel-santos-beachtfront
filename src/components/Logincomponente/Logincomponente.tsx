"use client";

import React, { useState } from 'react';

const LoginComponente: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        {isLogin ? (
          <div className="transition-opacity duration-500 ease-in-out">
            <h1 className="text-4xl text-blue-600 font-bold mb-6 text-center">Login</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email_login" className="block text-gray-700">Seu e-mail</label>
                <input id="email_login" name="email" required type="text" placeholder="contato@gmail.com" className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label htmlFor="senha_login" className="block text-gray-700">Sua senha</label>
                <input id="senha_login" name="senha" required type="password" placeholder="1234" className="w-full p-2 border rounded"/> 
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" name="manterlogado" id="manterlogado" className="mr-2"/> 
                <label htmlFor="manterlogado" className="text-gray-700">Manter-me logado</label>
              </div>
              <div className="mb-4">
                <input type="submit" value="Entrar" className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-700"/>
              </div>
              <p className="text-right">
                Ainda não tem uma conta?
                <button type="button" onClick={() => setIsLogin(false)} className="text-blue-600"> Cadastre-se</button>
              </p>
            </form>
          </div>
        ) : (
          <div className="transition-opacity duration-500 ease-in-out">
            <h1 className="text-4xl text-blue-600 font-bold mb-6 text-center">Cadastro</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="nome_cad" className="block text-gray-700">Seu nome</label>
                <input id="nome_cad" name="nome_cad" required type="text" placeholder="nome" className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label htmlFor="cpf_cad" className="block text-gray-700">Seu CPF</label>
                <input id="cpf_cad" name="cpf_cad" required type="text" maxLength={14} placeholder="000.000.000-00" className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email_cad" className="block text-gray-700">Seu e-mail</label>
                <input id="email_cad" name="email_cad" required type="email" placeholder="contato@gmail.com" className="w-full p-2 border rounded"/> 
              </div>
              <div className="mb-4">
                <label htmlFor="senha_cad" className="block text-gray-700">Sua senha</label>
                <input id="senha_cad" name="senha_cad" required type="password" placeholder="ex. 1234" className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <input type="submit" value="Cadastrar" className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-700"/>
              </div>
              <p className="text-right">
                Já tem conta?
                <button type="button" onClick={() => setIsLogin(true)} className="text-blue-600"> Ir para Login</button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginComponente;
