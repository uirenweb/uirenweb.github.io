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
          Жиі қойылатын сұрақтар
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Ата-аналар ең көп қоятын сұрақтар...
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
                Репетиторлық курстарға қалай тіркелуге болады?
              </h4>
              <p className="text-lg md:text-xl">
                Курстарға тіркелу үшін “Өтініш қалдыру” секциясында “Оқушы”
                батырмасын басып, нұсқауларға сәйкес керек жерлерін толтырыңыз.
                Бұдан кейін біз сізге сабақтарды ұйымдастыру бойынша
                хабарласатын боламыз.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Бұл ұйым қандай қызмет түрін ұсынады?
              </h4>
              <p className="text-lg md:text-xl">
                UIREN сапалы білім алу барысында қандай да бір қиындыққа
                ұшыраған балалар үшін тегін репетиторлық қызмет көрсетеді.
                Біздің волонтерлеріміз сіздің балаңызға оқу бойынша көмек беріп,
                әртүрлі дағдыларды дамытуда қолдау көрсетеді. Сонымен қатар біз
                бала өзін қолайлы сезініп, оқуға талпынысы оянатындай достық
                қарым-қатынас орнатуға тырысамыз.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Оқытушылардың біліктілік деңгейі қандай?
              </h4>
              <p className="text-lg md:text-xl">
                Біздің оқытушыларымыз – белгілі бір салада(пәнде) жетістіктері
                мен білімі бар, балаларды оқытуға өз үлесін қосуға тырысып
                жүрген еріктілер. Біз оқытушыларды білімдеріне, дағдыларына
                байланысты әр балаға сәйкес таңдап береміз.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Бұл жобаға қатысу ақысы қандай?
              </h4>
              <p className="text-lg md:text-xl">
                Бұл жобаға қатысу кез-келген бала үшін тегін. Біз отбасының
                қаржылық жағдайына қарамай, барлық балалар үшін қолжетімді білім
                беріп, қолдау көрсетуге тырысамыз.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-0 sm:px-14 pb-12">
            <div className="box-shadow2 bg-white px-6 py-5 rounded-2xl">
              <div className="flex justify-end">
                <img className="" src={quote} alt="" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-3">
                Оқыту курстарының ұзақтығы қандай?
              </h4>
              <p className="text-lg md:text-xl">
                Оқыту ұзақтығы ағымның ұзақтығына байланысты әртүрлі келуі
                мүмкін. Әрбір ағымның басталуына дейін біз сол нақты сағат санын
                не ағымның ұзақтығын жариялаймыз. Бұл ағымның басы мен аяғын
                белгілеп, қатысушыларға олардың оқу бағдарламасының уақыт
                шектерін айқын көрсетеді.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
