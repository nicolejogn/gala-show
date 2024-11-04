'use client';
import {SectionLayout} from "../section-layout";
import styles from './styles.module.css'


import {useRouter} from "next/navigation";
import {navigateTo} from "../../../utils/navigation";
import {Carousel} from "@/components/our-games-section/new-releases-carousel";


export function OurGamesSection() {
  const navigate = useRouter()


  return (
    <SectionLayout className={styles.sectionLayout}>
      <div className={styles.wrapper}>
        <div className={styles.headerContent}>
          <hr/>
          <span className={styles.headerTitle}>OUR GAMES</span>
          <hr/>
        </div>

        <Carousel/>

        <div className={styles.moreButtonWrapper}>
          <button className={styles.moreButton} onClick={navigateTo(navigate)}>
            BROWSE ALL GAMES
          </button>
        </div>
      </div>
    </SectionLayout>
  );
};
