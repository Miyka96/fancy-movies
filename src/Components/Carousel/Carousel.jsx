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
            {/* non riesco ad accedere al titolo (come test, in realtà mi serve la img), da fixare domani */}
            {/* // esempio rotto ====> {console.log(data.data[currentIndex].original_title)} <======= */}
            {console.log(data.data[currentIndex])}
        </div>
    )
}

export default Carousel;