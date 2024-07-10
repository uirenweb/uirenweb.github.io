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
          Часто задаваемые вопросы
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Ответы на часто задаваемые вопросы
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
                Как зарегистрироваться на репетиторские занятия?
              </h4>
              <p className="text-lg md:text-xl">
                Чтобы зарегистрироваться на учебный поток, пожалуйста, заполните
                анкету. Нажмите на кнопку "Ученик" в поле для заявок и следуйте
                инструкциям. После этого, мы свяжемся с вами для дальнейшего
                обсуждения и организации репетиторства для вашего ребенка.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Какие услуги предоставляет ваша организация?
              </h4>
              <p className="text-lg md:text-xl">
                UIREN предоставляет бесплатные репетиторские услуги для детей,
                столкнувшихся с любыми трудностями в получении качественного
                образования в школе. Наши волонтеры помогут вашему ребенку с
                учебой, поддержкой и развитием различных навыков. Мы также
                стремимся создать поддерживающую и дружественную среду, где
                ребенок будет чувствовать себя комфортно и мотивированным к
                обучению.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Каковы квалификации ваших репетиторов?
              </h4>
              <p className="text-lg md:text-xl">
                Наши репетиторы - добровольцы любых возрастов, которые имеют
                достижения или знания в определенной сфере (предмете) и которые
                стремятся внести вклад в развитие обучения детей. Мы тщательно
                подбираем репетиторов, учитывая их знания, навыки и соответствие
                потребностям вашего ребенка.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Сколько стоит участие в программе репетиторства?
              </h4>
              <p className="text-lg md:text-xl">
                Участие в нашей программе репетиторства абсолютно бесплатно. Мы
                стремимся предоставить доступное образование и поддержку для
                всех детей, независимо от финансового положения их семьи.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Как долго длится программа репетиторства?
              </h4>
              <p className="text-lg md:text-xl">
                Продолжительность программы репетиторства может варьироваться в
                зависимости от заявленной длительности потока. Перед началом
                каждого потока мы объявляем количество часов или же конкретную
                длительность учебного процесса. Эти параметры служат маркировкой
                начала и конца программы, предоставляя участникам ясное
                понимание временных рамок их обучения.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
