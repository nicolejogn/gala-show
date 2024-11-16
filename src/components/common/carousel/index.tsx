'use client'

import {useEffect, useState} from 'react';
import styles from './styles.module.css';

import classNames from "classnames";
import {ArrowsIconLeft, ArrowsIconRight} from "@/components/icons/arrows-icon";
import {navigateTo} from "../../../../utils/navigation";
import {useRouter} from "next/navigation";


interface CarouselProps {
  items: { image: string; title: string, id: number }[];
  interval?: number;
}

export const Carousel = ({items, interval = 3000}: CarouselProps) => {
  const navigate = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, interval, nextSlide]);

  return (
    <div
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.carouselInner}
        style={{transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {items.map((item,) => (
          <button onClick={navigateTo(navigate)} className={styles.carouselItem} key={item.id}>
            <img src={item.image} alt={item.title} className={styles.image}/>
          </button>
        ))}
      </div>

      <div className={styles.dots}>
        {items.map((_, index) => (
          <button
            key={index}
            className={classNames(styles.dot, {
              [styles.active]: index === currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <button onClick={prevSlide} className={classNames(styles.swiper)}><ArrowsIconLeft/></button>
      <button onClick={nextSlide} className={classNames(styles.swiper, styles.right)}><ArrowsIconRight/></button>
    </div>
  );
};

