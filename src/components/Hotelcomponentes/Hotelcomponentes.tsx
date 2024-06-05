import React from 'react';

const HotelComponente: React.FC = () => {
    return (
        <div className="font-sans bg-gray-100">
            <button id="btn-menu" className="block md:hidden fixed top-2 right-2 w-12 h-12 border-4 border-gray-400 rounded-lg bg-transparent flex justify-center items-center">
                <span className="w-6 h-0.5 bg-gray-600 mb-1"></span>
                <span className="w-6 h-0.5 bg-gray-600 mb-1"></span>
                <span className="w-6 h-0.5 bg-gray-600 mb-1"></span>
            </button>
            <main className="container mx-max my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Sobre o Hotel</h2>
                        <p className="mb-4">O Santos Beachfront é um hotel localizado à beira-mar, oferecendo suítes exclusivas como a Suite Náutica e a Suite Areia Branca. O café da manhã está incluso na estadia, e o hotel conta com uma academia para os hóspedes se exercitarem. Além disso, possui um refeitório onde os hóspedes podem desfrutar de refeições deliciosas e um estacionamento para maior comodidade dos visitantes. A principal atração do hotel é a vista deslumbrante para a praia, proporcionando uma experiência relaxante e memorável aos seus hóspedes.</p>
                        <img src="https://i.ibb.co/LptxD3g/hotel-presidente-4s.jpg" alt="vista" className="w-full rounded-lg" />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Recepção</h2>
                        <p className="mb-4">A entrada principal do hotel é convidativa, com uma atmosfera calorosa e acolhedora que convida os hóspedes a entrarem e se sentirem em casa desde o primeiro momento.</p>
                        <p className="mb-4">A área de recepção é bem organizada, com um balcão de check-in e check-out claramente visível e sinalizado.</p>
                        <p className="mb-4">Funcionários uniformizados estão prontos para receber os hóspedes com um sorriso e fornecer todas as informações necessárias sobre o hotel e os serviços disponíveis.</p>
                        <p className="mb-4">O café da manhã incluso é servido em uma área designada próxima à recepção.</p>
                        <p className="mb-4">Os hóspedes podem desfrutar de uma variedade de opções, incluindo bebidas quentes, sucos frescos, frutas, cereais, pães, bolos e pratos quentes, dependendo das preferências do hotel.</p>
                        <p className="mb-4">Os hóspedes são informados no momento do check-in sobre os horários e localização do café da manhã incluso. Qualquer informação adicional sobre opções de café da manhã ou restrições alimentares é fornecida neste momento. O café da manhã é servido em horários convenientes para os hóspedes, garantindo que todos possam desfrutar de uma refeição deliciosa antes de começar o dia.</p>
                        <img src="https://i.ibb.co/8BHn1wz/recep-o.jpg" alt="recep-o" className="w-full rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Estacionamento</h2>
                        <p className="mb-4">O hotel oferece estacionamento gratuito para os hóspedes durante toda a sua estadia. O estacionamento está localizado próximo à entrada principal do hotel para maior comodidade dos hóspedes.</p>
                        <p className="mb-4">Os hóspedes podem estacionar seus veículos com segurança e ter acesso fácil ao hotel a qualquer momento. O estacionamento é monitorado por câmeras de segurança para garantir a tranquilidade e a segurança dos hóspedes e de seus veículos.</p>
                        <p className="mb-4">Além disso, o estacionamento é espaçoso o suficiente para acomodar veículos de todos os tamanhos, incluindo carros de passeio, vans e ônibus turísticos.</p>
                        <img src="https://i.ibb.co/QcxKJSq/estacionamento-2-1.jpg" alt="estacionamento" className="w-full rounded-lg" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HotelComponente;