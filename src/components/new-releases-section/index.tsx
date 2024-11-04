import styles from "./styles.module.css";
import {SectionHeader} from "../section-header";
import {CardCarousel} from "../products-carousel";

const items = [
  {
    title: 'Expert Fisherman',
    image: '/products/product-1.gif',
    price: '13,086',
    remaining: '298/300',
    game: 'Town Star',
  },
  {
    title: 'Phantom Ship',
    image: '/products/product-2.gif',
    price: '10,469',
    remaining: '157/200',
    game: 'Town Star',
  },
  {
    title: 'Champions Arena Halloween 2024 Box',
    image: '/products/product-3.gif',
    price: '5,758',
    originalPrice: '8,637',
    remaining: '187/300',
    game: 'Champions Arena',
    discount: '33% off',
  },
  {
    title: 'Ice Cream Cart',
    image: '/products/product-4.gif',
    price: '13,086',
    remaining: '186/200',
    game: 'Town Star',
  },
  {
    title: 'Husk Rice Stand (Uncommon)',
    image: '/products/product-5.gif',
    price: '4,711',
    originalPrice: '7,852',
    remaining: '193/200',
    game: 'Town Star',
    discount: '40% off',
  },
  {
    title: 'Husk Rice Stand (Rare)',
    image: '/products/product-6.gif',
    price: '7,852',
    originalPrice: '10,469',
    remaining: '138/150',
    game: 'Town Star',
    discount: '25% off',
  },
];

export function NewReleasesSection() {
  return (
    <div className={styles.sectionWrapper}>
      <SectionHeader title='New Releases '/>

      <CardCarousel items={items}/>
    </div>
  );
};
