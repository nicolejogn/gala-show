import React from 'react';
import styles from './styles.module.css';
import {AuthForm} from "@/components/forms/auth-form";


export default function SignUp() {

  return (
    <div className={styles.container}>
      <div>
        <AuthForm isSignIn={false}/>
      </div>
    </div>
  );
};
