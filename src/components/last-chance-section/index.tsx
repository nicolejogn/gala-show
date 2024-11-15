'use client'
import styles from "../on-sale-section/styles.module.css";
import {SectionHeader} from "../section-header";
import {CardCarousel} from "../products-carousel";
import {navigateTo} from "../../../utils/navigation";
import {useRouter} from "next/navigation";
import {useWindowSize} from "@/hooks/window-size";
import {normaliseItems} from "@/components/products-carousel/utils";


const items = [
  {
    title: 'Expert Fisherman',
    image: '/products/product-10.gif',
    price: '13,086',
    remaining: '298/300',
    game: 'Town Star',
  },
  {
    title: 'Phantom Ship',
    image: '/products/product-9.gif',
    price: '10,469',
    remaining: '157/200',
    game: 'Town Star',
  },
  {
    title: 'Champions Arena Halloween 2024 Box',
    image: '/products/product-8.gif',
    price: '5,758',
    originalPrice: '8,637',
    remaining: '187/300',
    game: 'Champions Arena',
    discount: '33% off',
  },
  {
    title: 'Ice Cream Cart',
    image: '/products/product-7.gif',
    price: '13,086',
    remaining: '186/200',
    game: 'Town Star',
  },
  {
    title: 'Husk Rice Stand (Uncommon)',
    image: '/products/product-6.gif',
    price: '4,711',
    originalPrice: '7,852',
    remaining: '193/200',
    game: 'Town Star',
    discount: '40% off',
  },
  {
    title: 'Husk Rice Stand (Rare)',
    image: '/products/product-3.gif',
    price: '7,852',
    originalPrice: '10,469',
    remaining: '138/150',
    game: 'Town Star',
    discount: '25% off',
  },
];

export function LastChanceSection() {
  const {width} = useWindowSize()
  const navigate = useRouter()

  return (
    <div className={styles.sectionWrapper}>
      <SectionHeader title='Last Chance'/>

      <CardCarousel items={normaliseItems(items, width)}/>

      <div className={styles.viewAllItemsWrapper}>
        <button onClick={navigateTo(navigate)} type='button' className={styles.button}>
          VIEW ALL ITEMS ON THE STORE
        </button>
      </div>
    </div>
  );
};
