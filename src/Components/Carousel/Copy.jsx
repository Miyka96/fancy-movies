import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import styles from "./carousel.module.scss";

const Carousel = ({ data }) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://www.notebookcheck.it/fileadmin/Notebooks/News/_nc3/netflixteaser.png)",
            height: "500px",
            width: "100%",
            "backdropFilter": "blur(2px)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {data.map((item) => (
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              {item.title}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>{item.overview}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
{
  /* <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}/> */
}
export default Carousel;
