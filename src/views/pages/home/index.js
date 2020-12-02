import React, { useEffect } from 'react';
import styles from './HomePage.module.scss';
import { toast } from 'react-toastify';

export default () => {
  useEffect(() => {
    toast(
      <>
        Bienvenido a <strong>Guaitil-Soft</strong>!<br />
      </>
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Hola mundo</h1>
    </div>
  );
};
