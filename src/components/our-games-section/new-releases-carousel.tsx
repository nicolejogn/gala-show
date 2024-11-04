import styles from './styles.module.css';
import classNames from "classnames";
import {ArrowsIconLeft, ArrowsIconRight} from "@/components/icons/arrows-icon";


const games = [
  {title: 'The Walking Dead Empires', image: '/game/game-1.png'},
  {title: 'Legends Reborn', image: '/game/game-2.png', buttons: ['More Info', 'Game Store']},
  {title: 'Voyager', image: '/game/game-3.png', badge: '3rd Party Creator'},
  {title: 'Last Expedition', image: '/game/game-4.png'},
  {title: 'Dragon Strike', image: '/game/game-5.png'},
  {title: 'Super', image: '/game/game-6.png'},
];

export const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <button className={classNames(styles.swiper)}><ArrowsIconLeft/></button>
      <div className={styles.carousel}>
        {games.map((game) => (
          <div key={game.title} className={styles.carouselItem}>
            <img src={game.image} alt={game.title} className={styles.gameImage}/>
          </div>
        ))}
      </div>


      <button className={classNames(styles.swiper, styles.right)}><ArrowsIconRight/></button>
    </div>
  );
};
