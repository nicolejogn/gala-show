'use client';
import styles from './styles.module.css'


import {navigateTo} from "../../../utils/navigation";
import {ArrowRightBig} from "@/components/icons/arrows-icon";
import {useRouter} from "next/navigation";

export function SectionHeader({title}: Readonly<{ title: string }>) {
  const navigate = useRouter();

  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.title}>{title}</span>

        <button className={styles.viewMore} onClick={navigateTo(navigate)}>VIEW MORE <ArrowRightBig/></button>
      </div>
      <hr className={styles.divider}/>
    </div>
  );
};
