'use client'

import styles from './styles.module.css'
import {useEffect} from "react";
import {useRouter, useSearchParams,} from "next/navigation";
import {EmailSendInfo} from "@/components/email-send-info";

export function WalletConnectModal() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const showWalletConnect = searchParams.get('wallet');

  const email = searchParams.get('email')

  const navigateToConnectWallet = () => {
    router.push('/connect-wallet')
  }

  useEffect(() => {
    if (showWalletConnect) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showWalletConnect])

  if (!showWalletConnect && !email) {
    return null
  }


  if (email) {
    return (
      <div className={styles.modal}>
        <EmailSendInfo/>
      </div>
    )
  }


  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Nearly there! </h1>
        <p className={styles.title}>Connect a wallet now so you can buy & sell crypto items. This process only takes
          about 2 minutes! </p>

        <button className={styles.connectWallet} onClick={navigateToConnectWallet}>Connect Wallet</button>
      </div>
    </div>
  );
};
