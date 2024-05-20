<<<<<<< HEAD
=======
// Import Swiper React components
>>>>>>> 360b243975187a587175244ce0741e528f3312c7
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
<<<<<<< HEAD

export default function Carousel() {
  return (
    <>
      <Swiper
=======
import axios from "axios";
import { useEffect, useState } from "react";

// Props
//  numberOfSlide

// Carousel => numberOfSlide = 1 => hiển thị 1 thằng
// Carousel => numberOfSlide = 6 => hiển thị 6 thằng

export default function Carousel({ numberOfSlide, category }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(
      "https://662b9b40de35f91de158d81b.mockapi.io/Movie"
    );

    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={numberOfSlide}
        spaceBetween={10}
>>>>>>> 360b243975187a587175244ce0741e528f3312c7
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
<<<<<<< HEAD
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
=======
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        {/* movie => SwiperSlide*/}
        {/* cứ mỗi movie trong movies => SwiperSlide*/}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
>>>>>>> 360b243975187a587175244ce0741e528f3312c7
      </Swiper>
    </>
  );
}
