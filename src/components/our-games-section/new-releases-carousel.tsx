import styles from './styles.module.css';
import classNames from "classnames";
import {ArrowIconLeftBig, ArrowIconRightBig} from "@/components/icons/arrows-icon";
import {navigateTo} from "../../../utils/navigation";
import {useRouter} from "next/navigation";


const games = [
  {title: 'The Walking Dead Empires', image: '/game/game-1.png', icon: '/game/sub-icons/game-1-sub.png'},
  {
    title: 'Legends Reborn',
    image: '/game/game-2.png',
    buttons: ['More Info', 'Game Store'],
    icon: '/game/sub-icons/game-sub-2.png'
  },
  {title: 'Voyager', image: '/game/game-3.png', badge: '3rd Party Creator', icon: '/game/sub-icons/game-sub-3.png'},
  {title: 'Last Expedition', image: '/game/game-4.png', icon: '/game/sub-icons/game-sub-4.png'},
  {title: 'Dragon Strike', image: '/game/game-5.png', icon: '/game/sub-icons/game-sub-5.png'},
  {title: 'Super', image: '/game/game-6.png', icon: '/game/sub-icons/game-sub-6.png'},
];

export const Carousel = () => {
  const navigate = useRouter()

  return (
    <div className={styles.carouselContainer}>
      <button onClick={navigateTo(navigate)} className={classNames(styles.swiper)}><ArrowIconLeftBig/></button>
      <div className={styles.carousel}>
        {games.map((game) => (
          <button type='button' onClick={navigateTo(navigate)} key={game.title} className={styles.carouselItem}>
            <img src={game.image} alt={game.title} className={styles.gameImage}/>

            <img src={game.icon} alt={game.title} className={styles.gameIcon}/>
          </button>
        ))}
      </div>


      <button onClick={navigateTo(navigate)} className={classNames(styles.swiper, styles.right)}><ArrowIconRightBig/>
      </button>
    </div>
  );
};
