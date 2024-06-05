import React from 'react';
import styles from './SuiteDescription.module.css';

const SuiteDescription1 = () => {
  return (
    <div className={styles.containerquarto}>
      <article className={styles.descricaoquarto}>
        <h2 className={styles.suiteTitle}>Suíte Náutica de Casal com vista</h2>
        <section className={styles.suiteFeature}>
          <h3 className={styles.featureTitle}>Cama King-Size com Dossel</h3>
          <p>
            Uma imponente cama king-size com dossel é o destaque da suíte, proporcionando um luxuoso e confortável espaço para descanso. Adornada com roupas de cama de alta qualidade, oferece uma experiência de sono regeneradora para os hóspedes.
          </p>
        </section>
        <section className={styles.suiteFeature}>
          <h3 className={styles.featureTitle}>Varanda Privativa com Vista para o Mar</h3>
          <p>
            Uma varanda privativa oferece vistas deslumbrantes do oceano, criando um cenário romântico e sereno para os hóspedes. Um espaço adicional para desfrutar de momentos ao ar livre, seja apreciando o nascer ou o pôr do sol sobre as águas.
          </p>
        </section>
        <section className={styles.suiteFeature}>
          <h3 className={styles.featureTitle}>Iluminação Ambiente</h3>
          <p>
            A iluminação ambiente cuidadosamente projetada permite ajustes para criar atmosferas variadas. Desde um ambiente relaxante para momentos de tranquilidade até uma atmosfera mais vibrante para ocasiões especiais.
          </p>
        </section>
        <section className={styles.suiteFeature}>
          <h3 className={styles.featureTitle}>Amenidades Modernas</h3>
          <p>
            Equipada com comodidades modernas para atender às necessidades dos hóspedes. Inclui uma televisão de tela plana para entretenimento, acesso Wi-Fi para conectividade e um sistema de ar condicionado para garantir o conforto.
          </p>
        </section>
        <p className={styles.suiteDescription}>
          Essa suíte combina o luxo da cama king-size com dossel, as vistas deslumbrantes do mar, a versatilidade da iluminação ambiente e as conveniências das amenidades modernas para proporcionar uma estadia verdadeiramente memorável e confortável para os hóspedes.
        </p>
      </article>
    </div>
  );
};

export default SuiteDescription1;
