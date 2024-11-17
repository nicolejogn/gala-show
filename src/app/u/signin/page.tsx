import {AuthForm} from "@/components/forms/auth-form";
import styles from './styles.module.css'

export default function SignIn() {
  return (
    <div className={styles.container}>
      <AuthForm/>
    </div>
  );
};
