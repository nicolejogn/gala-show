import React from 'react';
import styles from './styles.module.css';

const VerifyAccount = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Verify Account</h2>
        <p className={styles.description}>
          Please confirm that you{"'"}re the owner of your account by entering the code sent to your email.
        </p>
        <input
          type="text"
          placeholder="Enter code here..."
          className={styles.input}
        />
        <button className={styles.submitButton} disabled>
          Submit
        </button>
        <p className={styles.resendLink}>
          Didn{"'"}t receive an email? <a href="#">Reach out</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyAccount;
