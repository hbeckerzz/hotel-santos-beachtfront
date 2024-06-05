import React from 'react';
import styles from './SuiteDescription.module.css';

const SuiteDescription3 = () => {
  return (
    <div className={styles.containerquarto}>
      <article className={styles.descricaoquarto}>
        <h2 className={styles.roomTitle}>Suíte Areia Branca Família</h2>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Ambiente Acolhedor para Famílias</h3>
            <p>O quarto de hotel familiar deluxe é meticulosamente projetado para criar um ambiente acolhedor e confortável para famílias, priorizando tanto a funcionalidade quanto o estilo. Cada elemento do quarto é cuidadosamente selecionado para garantir uma estadia memorável para todos os membros da família, desde os adultos até as crianças.</p>
        </section>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Paleta de Cores Suaves</h3>
            <p>Uma paleta de cores suaves e neutras é empregada, incluindo tons de bege e azul claro, para estabelecer uma atmosfera serena e relaxante. Essas cores são escolhidas para criar um espaço que seja igualmente agradável para adultos e crianças, promovendo uma sensação de tranquilidade durante a estadia.</p>
        </section>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Cama Queen-Size e Cama de Solteiro</h3>
            <p>O quarto é equipado com uma cama queen-size luxuosamente confortável para os adultos, juntamente com uma cama de solteiro adicional para acomodar uma criança. Essa configuração garante que todos os membros da família tenham uma noite de sono repousante, contribuindo para uma estadia agradável.</p>
        </section>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Área de Estar Pequena</h3>
            <p>Uma pequena área de estar, completa com uma poltrona aconchegante e uma mesa lateral, é incorporada ao quarto, oferecendo um espaço acolhedor para a família relaxar e passar momentos juntos. Essa área é projetada para promover a interação familiar e o conforto dos hóspedes.</p>
        </section>
        <section className={styles.descricao}>
            <p className={styles.roomDescription}>Este quarto de hotel familiar deluxe foi projetado para oferecer conforto, praticidade e um ambiente acolhedor para famílias que desejam desfrutar de momentos juntos durante a estadia.</p>
        </section>
      </article>
    </div>
  );
};

export default SuiteDescription3;
