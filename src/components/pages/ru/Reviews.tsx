import image1 from "../../../img/icons/reviews/orange_quotes.svg";

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-lightPurple">
      <div className="container px-4 py-24 mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange1 text-shadow">
          Отзывы
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Отзывы родителей участников проекта
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
              Хочу выразить огромную благодарность волонтерам UIREN за подобный
              социальный проект. Моя дочка смогла за короткое время подтянуть
              свои знания в программе математики по 4 классу и заметно улучшила
              оценки, благодаря учителю, который смог быстро найти общий язык и
              помочь с пробелами в знаниях.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Английский язык
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              Наш учитель смог найти подход к моему ребёнку: умело направлял,
              терпеливо объяснял, закрывал имеющиеся “пробелы" в знаний. За
              короткий срок словарный запас, понимание материала, произношение
              слов заметно улучшились. Также понравилась проверка знаний в виде
              игры в приложении Kahoot. Большое спасибо за организацию такого
              мероприятия для детей, где старший товарищ порой лучше преподносит
              материал нежели родители.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 rounded-3xl ">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                История Казахстана
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              Хочется сказать большое спасибо проекту UIREN! Замечательный
              проект. Благодаря учителю, мой ребенок стал учить предмет с
              увлечением. Оценки стали не ниже 9-10 баллов. Учитель быстро нашел
              общий язык с ребенком и проводил уроки очень интересно. Большое
              спасибо вам! С нетерпением ждем второй поток этого проекта!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
