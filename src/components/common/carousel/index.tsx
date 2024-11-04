'use client'

import {useEffect, useState} from 'react';
import styles from './styles.module.css';

import classNames from "classnames";
import {ArrowsIconLeft, ArrowsIconRight} from "@/components/icons/arrows-icon";


interface CarouselProps {
  items: { image: string; title: string, id: number }[];
  interval?: number;
}

export const Carousel = ({items, interval = 3000}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {items.map((item,) => (
          <div className={styles.carouselItem} key={item.id}>
            <img src={item.image} alt={item.title} className={styles.image}/>
          </div>
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

