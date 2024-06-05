import React from 'react';
import styles from './SuiteDescription.module.css';

const SuiteDescription2 = () => {
  return (
    <div className={styles.containerquarto}>
      <article className={styles.descricaoquarto}>
        <h2 className={styles.roomTitle}>Suíte Náutica Familiar com Vista</h2> 
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Vista Panorâmica para o Mar</h3>
            <p>Uma espaçosa varanda privativa oferece uma vista deslumbrante para o mar, perfeita para toda a família desfrutar. Equipada com cadeiras confortáveis e uma pequena mesa, ideal para compartilhar momentos à beira-mar. Um local encantador para apreciar juntos o pôr do sol sobre as ondas.</p>
        </section>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Banheiro Funcional com Banheira Exclusiva</h3>
            <p>O banheiro familiar é projetado para atender às necessidades de todos, oferecendo comodidades essenciais e uma banheira exclusiva. Além do chuveiro eficiente e do lavatório, a luxuosa banheira proporciona momentos relaxantes para toda a família. Uma opção conveniente para os pais relaxarem e as crianças se divertirem em um banho tranquilo.</p>
        </section>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Amenidades Modernas</h3>
            <p>A suíte está equipada com comodidades modernas para garantir o conforto de toda a família. Inclui uma televisão de tela plana para entretenimento, acesso Wi-Fi para manter todos conectados e um sistema de ar condicionado para o máximo conforto.</p>
        </section>
        <section className={styles.roomFeature}>
            <h3 className={styles.featureTitle}>Camas Confortáveis</h3>
            <p>As camas espaçosas são cuidadosamente escolhidas para oferecer conforto a todos os membros da família. Roupas de cama suaves e aconchegantes garantem uma boa noite de sono para todos.</p>
        </section>
        <p className={styles.roomDescription}>Esta suíte familiar é projetada para proporcionar uma estadia relaxante e memorável para toda a família. Com uma vista deslumbrante para o mar, um banheiro funcional com banheira e todas as comodidades modernas, é o local perfeito para criar momentos especiais em família.</p>
      </article>
    </div>
  );
};

export default SuiteDescription2;
