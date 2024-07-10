import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../../img/process/eng.png";
import image2 from "../../../img/process/math.png";
import image3 from "../../../img/process/arts.png";
import image4 from "../../../img/process/logic.jpg";
import image5 from "../../../img/process/kaz lang.png";

export const Process = () => {
  return (
    <section
      id="process"
      className="process bg-gradient-to-b from-lightPink2 via-white to-white"
    >
      <div className="container mx-auto py-10">
        <h2 className="text-5xl pl-10 font-bold mb-12 xl:mb-20">
          Learning Process
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          slidesPerView={1}
          spaceBetween={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          className=""
        >
          <SwiperSlide className="px-14 pb-12 ">
            {/* <div className="blur1 bg-orange1 z-0 h-44 w-44 absolute left-1/2  top-1/3  "></div> */}
            <div className="relative z-10 bg-white box-shadow2 h-full rounded-3xl mx-auto flex flex-col px-5 pt-4 pb-3 justify-center text-white text-3xl">
              <img src={image1} alt="" />
              <div className="text-black text-xl text-center pt-3">
                English language lessons
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-14 pb-12">
            <div className="slide bg-white box-shadow2 h-full rounded-3xl mx-auto flex flex-col px-5 pt-4 pb-3 justify-center text-white text-3xl">
              <img src={image2} alt="" />
              <div className="text-black text-xl text-center pt-3">
                Mathematics lessons
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-14 pb-12">
            <div className="slide bg-white box-shadow2 h-full rounded-3xl mx-auto flex flex-col px-5 pt-4 pb-3 justify-center text-white text-3xl">
              <img src={image3} alt="" />
              <div className="text-black text-xl text-center pt-3">
                Arts lessons
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-14 pb-12">
            <div className="slide bg-white box-shadow2 h-full rounded-3xl mx-auto flex flex-col px-5 pt-4 pb-3 justify-center text-white text-3xl">
              <img src={image4} alt="" />
              <div className="text-black text-xl text-center pt-3">
                Logic lessons
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-14 pb-12">
            <div className="slide bg-white box-shadow2 h-full rounded-3xl mx-auto flex flex-col px-5 pt-4 pb-3 justify-center text-white text-3xl">
              <img src={image5} alt="" />
              <div className="text-black text-xl text-center pt-3">
                Kazakh language lessons
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
