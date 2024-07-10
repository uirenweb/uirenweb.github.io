import image1 from "../../../img/icons/reviews/orange_quotes.svg";

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-lightPurple">
      <div className="container px-4 py-24 mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange1 text-shadow">
          Пікірлер
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Ата-аналардың жобамызға берген бағасы...
        </h3>
        <div className="md:flex justify-between">
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Математика
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              Осындай әлеуметтік жоба үшін UIREN волонтерлеріне шексіз алғысымды
              білдіргім келеді. Қызым тез тіл тауып, білімдегі олқылықтарды
              жоюға көмектескен мұғалімнің арқасында 4-сыныптағы математикалық
              білімін аз уақыт ішінде жетілдіріп, бағаларын айтарлықтай
              жақсартты.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Ағылшын тілі
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              Ұстаз менің баламды оқытуға тәсіл таба білді : ол шебер бағыт
              берді, шыдамдылықпен түсіндірді және білімдегі “олқылықтарды”
              жойды. Қысқа уақыт ішінде сөздік қор, материалды түсіну, сөздерді
              айта алу қабілеттері айтарлықтай жақсарды. Kahoot бағдарламасы
              арқылы өткен ойын форматындағы тесттер де ұнады. Балаға жоғары
              сынып оқушысы сабақты ата-аналарға қарағанда жақсырақ түсіндіре
              алады. Сол үшін де балаларға арналған осындай іс-шараны
              ұйымдастырғандарыңыз үшін көп рақмет.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 rounded-3xl ">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Қазақстан тарихы
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              UIREN жобасына үлкен алғысымды айтқым келеді! Керемет жоба.
              Ұстаздың арқасында балам пәнді ынтамен меңгере бастады. Енді
              бағалары 9-10 ұпайдан төмен түспейді. Мұғалім баламен тез тіл
              табысып, сабақты өте қызықты етіп өткізді. Көп рақмет! Біз бұл
              жобаның екінші кезеңін асыға күтеміз!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
