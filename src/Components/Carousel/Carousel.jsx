import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import styles from './carousel.module.scss'

const Carousel = ({data}) => {

    return(
        <Swiper
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        >
            {data.map(item => 
                <SwiperSlide>
                    <div className={styles.slideContainer}>
                        <div className={styles.slideTitle}>
                            {item.title}
                        </div>
                        <img className={styles.slideImg} src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}/> 
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Carousel;