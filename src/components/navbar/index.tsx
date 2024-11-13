'use client';
import styles from './styles.module.css';

import classNames from "classnames";
import {Discord} from "@/components/icons/discord";
import {Search} from "@/components/icons/search";
import {DropdownIcon} from "../icons/dropdown-icon";

import {navigateTo} from "../../../utils/navigation";
import {GeneralIcon} from "@/components/icons/general-icon";
import {GalaIcon} from "@/components/icons/gala-icon";
import {Telegram} from "@/components/icons/telegram";
import {useRouter} from "next/navigation";
import {useWindowSize} from "@/hooks/window-size";
import {NavbarMobile} from "@/components/navbar/mobile";


export const NavBar = () => {
  const navigate = useRouter()
  const {width} = useWindowSize()

  const isMobiele = width <= 768


  if (isMobiele) {
    return <NavbarMobile/>
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navbarParts}>
        <button onClick={navigateTo(navigate)} className={classNames(styles.iconButton, styles.buttonSpace)}
                type='button'>
          <GeneralIcon/>
        </button>

        <button onClick={navigateTo(navigate)}
                className={classNames(styles.iconButton, styles.buttonSpace, styles.galaIcon)}
                type='button'>
          <GalaIcon/>
        </button>

        <div className={styles.searchBar}>
          <Search/>
          <input
            type="text"
            placeholder="Search items and games"
            className={styles.searchInput}
          />
          <div className={styles.dropdownIcon}>
            <DropdownIcon/>
          </div>
        </div>
      </div>

      <div className={classNames(styles.navbarParts, styles.navbarRightPart)}>
        <div className={styles.menu}>
          <button className={styles.menuItem} onClick={navigateTo(navigate)}>Store</button>
          <button className={styles.menuItem} onClick={navigateTo(navigate)}>Games</button>
          <button className={styles.menuItem} onClick={navigateTo(navigate)}>News</button>

          <button onClick={navigateTo(navigate)} className={classNames(styles.iconButton, styles.linkButton)}
                  type='button'>
            <Telegram/>
          </button>

          <button onClick={navigateTo(navigate)} className={classNames(styles.iconButton, styles.linkButton)}
                  type='button'>
            <Discord/>
          </button>
        </div>

        <div className={styles.authButtons}>
          <button className={styles.buttonOutlined} onClick={navigateTo(navigate)}>Sign Up</button>
          <button onClick={navigateTo(navigate)}
                  className={classNames(styles.buttonOutlined, styles.loginButton)}>Login
          </button>
        </div>
      </div>
    </nav>
  );
};


