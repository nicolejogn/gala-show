import {SectionLayout} from "@/components/section-layout";
import {Carousel} from "@/components/common/carousel";
import {bannerImages} from "@/components/banner-section/constants";


export function BannerSectionMobile() {
  return (
    <SectionLayout>
      <div style={{marginTop: '64px'}}>
        <Carousel items={bannerImages} interval={6000}/>
      </div>
    </SectionLayout>
  );
};
