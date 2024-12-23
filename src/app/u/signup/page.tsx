import React, { Suspense } from 'react';
import styles from './styles.module.css';
import {AuthForm} from "@/components/forms/auth-form";


export default function SignUp() {

  return (
    <Suspense>
    <div className={styles.container}>
      <AuthForm isSignIn={false}/>
    </div>
    </Suspense>
  );
};
