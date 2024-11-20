'use client'
import React, {useState} from 'react';
import styles from './styles.module.css';

export const RecoveryPhraseNew = () => {
  const [phrases, setPhrases] = useState(Array(12).fill(''));
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updatedPhrases = [...phrases];
    updatedPhrases[index] = value;
    setPhrases(updatedPhrases);

    // Clear error if input is corrected
    if (error) setError('');
  };

  const handleSubmit = () => {
    if (phrases.includes('')) {
      setError('Please fill out all fields before submitting.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {phrases.map((phrase, index) => (
          <div key={index} className={styles.inputWrapper}>
            <input
              type="text"
              value={phrase}
              onChange={(e) => handleChange(index, e.target.value)}
              className={`${styles.input} ${error && !phrase ? styles.errorInput : ''}`}
              placeholder={`Word ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {isSubmitted && <p className={styles.successMessage}>Phrases submitted successfully!</p>}
      <button
        className={styles.confirmButton}
        onClick={handleSubmit}
        disabled={phrases.includes('')}
      >
        Confirm Secret Recovery Phrase
      </button>
    </div>
  );
};
