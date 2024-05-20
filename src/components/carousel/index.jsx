import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img src="https://youthvietnam.vn/wp-content/uploads/2021/06/mau-poster-phim-viet-nam.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://th.bing.com/th/id/OIP.yf9DBDiflGytdTUQwyUHiQHaEK?w=243&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://th.bing.com/th/id/OIP.0Jf1CwobUzu2qQ9sN0pULQHaEK?w=264&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://th.bing.com/th/id/OIP.rLONb5ZghNY_fFiZ6oamVgHaDW?w=286&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://th.bing.com/th/id/OIP.kOeHVL8qdCiSRdyv6T_vHwHaC0?w=366&h=133&c=7&r=0&o=5&pid=1.7" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://th.bing.com/th/id/OIP.2V36TxgxmjFATkjZ6g8ZxQHaD4?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
