import React from 'react';
import styles from './styles.module.css';
import {SignUpForm} from "@/components/forms/sign-up";


export default function SignUp() {

  return (
    <div className={styles.container}>
      <div>
        <SignUpForm/>
        <p className={styles.login}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};
