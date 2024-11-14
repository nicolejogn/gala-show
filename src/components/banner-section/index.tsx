'use client';
import {SectionLayout} from "../section-layout";
import {Carousel} from "../common/carousel";
import {useWindowSize} from "@/hooks/window-size";
import {BannerSectionMobile} from "@/components/banner-section/mobile";
import {bannerImages} from "@/components/banner-section/constants";


export function BannerSection() {
  const {width} = useWindowSize()

  const isMobile = width <= 768

  if (isMobile)
    return <BannerSectionMobile/>

  return (
    <SectionLayout>
      <div style={{marginTop: '64px'}}>
        <Carousel items={bannerImages} interval={6000}/>
      </div>
    </SectionLayout>
  );
};
