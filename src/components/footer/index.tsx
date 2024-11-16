'use client'
import styles from './styles.module.css';
import Image from "next/image";
import {navigateTo} from "../../../utils/navigation";
import {useRouter} from "next/navigation";
import {useWindowSize} from "@/hooks/window-size";
import classNames from "classnames";

export const Footer = () => {
  const {width} = useWindowSize()
  const route = useRouter()

  const isMobile = width < 768

  const imageWidth = isMobile ? 277 : 505
  const imageHeight = isMobile ? 107 : 98

  const icons = isMobile ? '/footer/icons-mobile.png' : '/footer/icons.png'

  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.leftLink}>
          <div className={styles.column}>
            <h3>HELP</h3>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact Support</a>
          </div>
          <div className={classNames(styles.column, styles.columnSpace)}>
            <h3>ABOUT</h3>
            <a href="#careers">Careers</a>
            <a href="#news">News</a>
          </div>
          <div className={styles.column}>
            <h3>$GALA COIN</h3>
            <a href="#get-gala">Get $GALA</a>
            <a href="#smart-contract">Smart Contract</a>
          </div>
        </div>
        <div className={styles.socials}>
          <h3>JOIN OUR COMMUNITY</h3>
          <div className={styles.icons}>
            <button className={styles.buttonIcons} onClick={navigateTo(route)}>
              <Image width={imageWidth} height={imageHeight} src={icons} alt={''}/>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mobileFooterBottom}>
        <p>© 2024 Gala Games</p>

        <div className={styles.icons}>
          <button className={styles.buttonIcons} onClick={navigateTo(route)}>
            <Image width={222} height={38} src={'/footer/country.png'} alt={''}/>
          </button>
        </div>
      </div>
      <button className={styles.desktopCountry} onClick={navigateTo(route)}>
        <Image width={499} height={49}
               src={'/footer/country-desktop.png'} alt={''}/>
      </button>
      <div className={styles.footerBottom}>


        <a>© 2024 Gala Games</a>
        <span>•</span>
        <a href="#terms">Terms and Conditions</a>
        <span>•</span>
        <a href="https://games.gala.com/privacy-policy">Privacy Policy</a>
        <span>•</span>
        <a href="#privacy-settings">Privacy Settings</a>
        <span>•</span>
        <a href="#eula">Launcher EULA</a>
        <span>•</span>
        <a href="#bug-bounty">Bug Bounty</a>
        <span>•</span>
        <a href="#disclosure">Responsible</a>
        <span>•</span>
        <a href="">Disclosure</a>
      </div>
    </footer>
  );
}
