import React from 'react';
import styles from './styles.module.css';
import {AuthForm} from "@/components/forms/auth-form";


export default function SignIn() {

  return (
    <div className={styles.container}>
      <AuthForm/>
    </div>
  );
};
