'use client';
import {SectionLayout} from "../section-layout";
import {Carousel} from "../common/carousel";
import {bannerImages, bannerImagesMobile} from "@/components/banner-section/constants";
import styles from './styles.module.css'
import {useWindowSize} from "@/hooks/window-size";


export function BannerSection() {
  const {width} = useWindowSize()

  const isMobile = width < 768


  return (
    <SectionLayout>
      <div className={styles.bannerWrapper}>
        <Carousel items={isMobile ? bannerImagesMobile : bannerImages}/>
      </div>
    </SectionLayout>
  );
};

