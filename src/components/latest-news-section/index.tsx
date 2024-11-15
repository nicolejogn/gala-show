'use client';
import styles from './styles.module.css'

import {CustomCheckbox} from "../common/checkbox";

import {useRouter} from "next/navigation";
import {navigateTo} from "../../../utils/navigation";
import {GeneralIcon} from "@/components/icons/general-icon";


export function LatestNewsSection() {
  const navigate = useRouter()

  return (
    <div className={styles.footer}>
      <div className={styles.sectionLayout}>
        <div className={styles.content}>

          <div className={styles.leftSection}>
            <GeneralIcon/>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.heading}>Get the latest news</h3>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter email address"
                className={styles.input}
                required
              />
              <button onClick={navigateTo(navigate)} type="button" className={styles.button}>
                Sign Up
              </button>
            </form>
            <div className={styles.checkboxGroup}>
              <div className={styles.checkboxLabel}>
                <CustomCheckbox/>
                <div>
                  I agree to the <a href="#" className={styles.link}>Privacy Policy</a> and <a href="#"
                                                                                               className={styles.link}>Terms
                  and Conditions</a>
                </div>
              </div>
              <div className={styles.checkboxLabel}>
                <CustomCheckbox/>
                I agree to receive promotional materials from Gala. I understand that I can withdraw my consent at any
                time.
              </div>

              <button onClick={navigateTo(navigate)} type="button" className={styles.submitButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
