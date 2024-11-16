import React from 'react';
import styles from './styles.module.css';


interface RecaptchaProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export const Recaptcha = ({checked, setChecked}: RecaptchaProps) => {

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
        onClick={handleCheck}
      >
        {checked && <span className={styles.checkIcon}>✔</span>}
      </div>
      <span className={styles.label}>{checked ? "Success!" : 'Verify you are human'} </span>
    </div>
  );
};


