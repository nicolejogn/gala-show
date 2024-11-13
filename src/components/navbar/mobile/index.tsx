import React from 'react';
import styles from './styles.module.css';
import {useRouter} from "next/navigation";
import {navigateTo} from "../../../../utils/navigation";
import classNames from "classnames";
import {GeneralIcon} from "@/components/icons/general-icon";

export const NavbarMobile = () => {
  const navigate = useRouter()

  return (
    <nav className={styles.navbar}>

      <div>
        <button className={styles.menuIcon} onClick={navigateTo(navigate)}>☰</button>
        {/*<button className={styles.searchIcon} onClick={navigateTo(navigate)}><Search/></button>*/}
      </div>
      <button onClick={navigateTo(navigate)} className={classNames(styles.iconButton, styles.buttonSpace)}
              type='button'>
        <GeneralIcon/>
      </button>
      {/*<div className={styles.logo}>*/}
      {/*  <img src="logo.svg" alt="Games Logo" className={styles.logoImage}/>*/}
      {/*  <span>GAMES</span>*/}
      {/*</div>*/}

      <div className={styles.rightSection}>
        <button className={styles.signUpButton} onClick={navigateTo(navigate)}>Sign Up</button>
        <button className={styles.loginButton} onClick={navigateTo(navigate)}>Login</button>
      </div>
    </nav>
  );
};
