import React from 'react';
import styles from './styles.module.css';
import {SignUpForm} from "@/components/forms/sign-up";


export default function SignUp() {

  return (
    <div className={styles.container}>
      <div>
        <SignUpForm/>
      </div>
    </div>
  );
};
