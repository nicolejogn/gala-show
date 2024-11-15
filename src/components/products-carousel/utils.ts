import {CardProps} from "@/components/products-carousel/index";

export const normaliseItems = (items: CardProps[], windowSize: number) => {


  if (windowSize <= 600) {
    return items.slice(0, 2);
  }


  if (windowSize <= 1100) {
    return items.slice(0, 3);
  }

  return items
}
