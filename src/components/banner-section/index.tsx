import {SectionLayout} from "../section-layout";
import {Carousel} from "../common/carousel";

const items = [
  {image: '/banner/banner-1.png', id: 1, title: ''},
  {image: '/banner/banner-2.png', id: 2, title: ''},
  {image: '/banner/banner-3.png', id: 3, title: ''},
  {image: '/banner/banner-4.png', id: 4, title: ''},
  {image: '/banner/banner-5.png', id: 5, title: ''},
  {image: '/banner/banner-6.png', id: 6, title: ''},
  {image: '/banner/banner-7.png', id: 7, title: ''},
  {image: '/banner/banner-8.png', id: 8, title: ''},
  {image: '/banner/banner-9.jpg', id: 9, title: ''},
]


export function BannerSection() {
  return (
    <SectionLayout>
      <div style={{marginTop: '64px'}}>
        <Carousel items={items} interval={6000}/>
      </div>
    </SectionLayout>
  );
};
