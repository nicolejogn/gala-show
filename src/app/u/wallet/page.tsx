import React from 'react';
import styles from './styles.module.css';

const ConnectWallet = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/icons/form-logo.png" alt="Gala Logo" className={styles.logo}/>
        <span className={styles.title}>GAMES</span>
        <div className={styles.profileIcon}>YA</div>
      </header>
      <div className={styles.content}>
        <h1>Welcome!</h1>
        <p>Let{"'"}s connect your wallet</p>
        <span className={styles.subtitle}>Select a wallet provider</span>

        <button className={styles.walletButton}>Connect Coinbase Wallet</button>
        <button className={styles.walletButton}>Connect MetaMask</button>
        <button className={styles.walletButton}>Connect OKX Wallet</button>
        <button className={styles.walletButton}>Connect Binance Wallet</button>

        <div className={styles.supportArticles}>
          <p>Helpful Support Articles</p>
          <a href="#what-is-wallet">What is a wallet?</a>
          <a href="#how-to-connect-wallet">How to connect a web3 wallet</a>
          <a href="#install-coinbase">How to install Coinbase Wallet</a>
          <a href="#install-metamask">How to install MetaMask</a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
