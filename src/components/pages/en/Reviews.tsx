import image1 from "../../../img/icons/reviews/orange_quotes.svg";

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-lightPurple">
      <div className="container px-4 py-24 mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange1 text-shadow">
          Feedback
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Reviews from parents of project participants...
        </h3>
        <div className="md:flex justify-between">
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Mathematics
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              I want to express my immense gratitude to the UIREN volunteers for
              this social project. My daughter was able to improve her 4th grade
              math skills in a short time and noticeably improved her grades,
              thanks to the teacher who was able to quickly find common language
              and help with some gaps in her knowledge.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                English Language
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              Our teacher was able to find the right approach for my child: he
              skillfully guided, patiently explained, and addressed the “gaps”
              in knowledge. Within a short period of time, vocabulary,
              understanding of the material, and pronunciation of words
              noticeably improved. I also liked testing knowledge in the form of
              a game in the Kahoot app. Thank you very much for organizing these
              lessons for children, as senior students are sometimes better at
              explaining information than parents.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 rounded-3xl ">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Kazakh History
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              I would like to say a big thank you to the UIREN project! A
              wonderful project. Thanks to the teacher, my child began to learn
              the subject with passion. Now his grades are no lower than 9-10
              points. The teacher quickly found a common language with my child
              and the lessons were very interesting. Thank you very much! We are
              looking forward to the second phase of this project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
