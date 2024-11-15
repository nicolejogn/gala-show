import {NavBar} from "@/components/navbar";
import {BannerSection} from "@/components/banner-section";
import {OurGamesSection} from "@/components/our-games-section";
import {SectionLayout} from "@/components/section-layout";
import {NewReleasesSection} from "@/components/new-releases-section";
import {OnSaleSection} from "@/components/on-sale-section";
import {BestSellersSection} from "@/components/best-sellers-section";
import {LastChanceSection} from "@/components/last-chance-section";
import {LatestNewsSection} from "@/components/latest-news-section";


export default function Home() {
  return (
    <div style={{position: 'relative'}}>
      <NavBar/>
      <BannerSection/>
      <OurGamesSection/>
      <SectionLayout variant='small'>
        <NewReleasesSection/>
        <OnSaleSection/>
        <BestSellersSection/>
        <LastChanceSection/>
      </SectionLayout>
      <LatestNewsSection/>
    </div>
  );
};
