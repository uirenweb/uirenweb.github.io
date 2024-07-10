import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import quote from "../../../img/icons/faq/quote.svg";

export const FAQ = () => {
  return (
    <section className="faq bg-gray">
      <div className="container px-6 mx-auto py-16">
        <h2 id="faq" className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange1 text-shadow">
          Frequently Asked Questions
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Frequently Asked Questions of Parents of Students…
        </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          slidesPerView={1}
          navigation
          spaceBetween={5}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          className=""
        >
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                How do I register for tutoring sessions?
              </h4>
              <p className="text-lg md:text-xl">
                To register for a tutoring flow, please fill out the application
                form. Click on the "Student" button in the application field and
                follow the instructions. After that, we will contact you to
                further discuss and arrange tutoring for your child.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                What services does your organization provide?
              </h4>
              <p className="text-lg md:text-xl">
                UIREN provides free tutoring services for children facing any
                difficulty in getting a quality education in school. Our
                volunteers will help your child with education, support and
                development of various skills. We also strive to provide a
                supportive and friendly environment where your child will feel
                comfortable and motivated to learn.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                What are the qualifications of your tutors?
              </h4>
              <p className="text-lg md:text-xl">
                Our tutors are volunteers of all ages who have achievements or
                knowledge in a particular area (subject) and who are keen to
                contribute to the development of children's learning. We
                carefully select tutors based on their knowledge, skills and
                relevance to your child's needs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                How much does it cost to participate in our tutoring program?
              </h4>
              <p className="text-lg md:text-xl">
                Participation in our tutoring program is absolutely free. We
                strive to provide free education and support for all children,
                regardless of their family's financial situation.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                How long does the tutoring program last?
              </h4>
              <p className="text-lg md:text-xl">
                The length of the tutoring program can vary depending on the
                stated length of the flow. Before the start of each flow, we
                announce the number of hours or the specific length of the
                tutoring program. These parameters serve to mark the beginning
                and end of the program, giving participants a clear
                understanding of the time frame of their learning.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
