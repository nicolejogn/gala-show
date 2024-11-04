import styles from "../on-sale-section/styles.module.css";
import {SectionHeader} from "../section-header";
import {CardCarousel} from "../products-carousel";

const items = [
  {
    title: 'Warehouse of Credits',
    image: '/products/gold-1.png',
    price: '13,086',
    remaining: '298/300',
    game: 'Town Star',
  },
  {
    title: 'Stockpile of Credits',
    image: '/products/gold-2.png',
    price: '10,469',
    remaining: '157/200',
    game: 'Town Star',
  },
  {
    title: 'Stash of Credits',
    image: '/products/gold-3.png',
    price: '5,758',
    originalPrice: '8,637',
    remaining: '187/300',
    game: 'Champions Arena',
    discount: '33% off',
  },
  {
    title: 'Silo of Credits',
    image: '/products/gold-4.png',
    price: '13,086',
    remaining: '186/200',
    game: 'Town Star',
  },
  {
    title: '80M Chip Pack',
    image: '/products/gold-5.png',
    price: '4,711',
    originalPrice: '7,852',
    remaining: '193/200',
    game: 'Town Star',
    discount: '40% off',
  },
  {
    title: '6M Chip Pack',
    image: '/products/gold-6.png',
    price: '7,852',
    originalPrice: '10,469',
    remaining: '138/150',
    game: 'Town Star',
    discount: '25% off',
  },
];

export function BestSellersSection() {
  return (
    <div className={styles.sectionWrapper}>
      <SectionHeader title='Best Sellers '/>

      <CardCarousel items={items}/>
    </div>
  );
};
