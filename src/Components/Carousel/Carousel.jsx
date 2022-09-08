import styles from './carousel.module.scss';
import {useState,useEffect} from 'react';

const Carousel = (data) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselScroll = () => {
        setCurrentIndex(prev=> prev === data.data.length - 1 ? prev = 0 : prev +1)
    }
    useEffect(() => {
        setInterval(() => {carouselScroll()},5000)
    },[])

    return(
        <div className={styles.carousel}>
            {
                data.data[currentIndex]&&<img src={`https://image.tmdb.org/t/p/w1280${data.data[currentIndex].backdrop_path}`}/>
            }
            
            {(data.data[currentIndex]&&data.data[currentIndex].title)}
        </div>
    )
}

export default Carousel;