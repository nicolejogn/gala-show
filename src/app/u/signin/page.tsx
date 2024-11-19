import {AuthForm} from "@/components/forms/auth-form";
import styles from './styles.module.css'
import { Suspense } from "react";

export default function SignIn() {
  return (
    <Suspense>
    <div className={styles.container}>
      <AuthForm/>
    </div>
    </Suspense>
  );
};
