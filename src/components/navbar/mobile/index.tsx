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

      <div className={styles.navbarContent}>
        <button className={styles.menuIcon} onClick={navigateTo(navigate)}>
          <img
            src="/icons/menu.png"
            alt="Games Logo"
            className={styles.logoImage}
          />
        </button>
        <button className={styles.searchIcon} onClick={navigateTo(navigate)}>
          <img
            src="/icons/search.png"
            alt="Games Logo"
            className={styles.logoImage}
          />
        </button>
      </div>

      <button onClick={navigateTo(navigate)} className={classNames(styles.iconButton, styles.buttonSpace)}
              type='button'>
        <GeneralIcon height={30}/>
      </button>

      <div className={styles.rightSection}>
        <button className={styles.signUpButton} onClick={navigateTo(navigate)}>Sign Up</button>
      </div>
    </nav>
  );
};
