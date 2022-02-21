import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

const Banner = () => {
  return (
    <div className="banner plus">
      <Swiper
        spaceBetween={80}
        loop={true}
        slidesPerView={"auto"}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        <SwiperSlide>
          <div className="item">Logo</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Social Media</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Identity Branding</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Advertisement</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Packaging</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Landing Page</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Website</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">Print</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
