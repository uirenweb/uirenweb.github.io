import image1 from "../../../img/special/1.png";
import icon3 from "../../../img/icons/special/3.svg";
import icon4 from "../../../img/icons/special/4.svg";
import icon5 from "../../../img/icons/special/5.svg";

export const Special = () => {
  return (
    <section id="special" className="pt-24 pb-16 px-4 ">
      <div className="container mx-auto font-PublicSans">
        <h2 className="special__title text-3xl md:text-4xl lg:text-5xl font-semibold text-shadow mb-12 lg:mb-14">
          What makes UIREN{" "}
          <span className="text-blue2 special__word">special</span> ?
        </h2>
        <div className="md:flex items-center">
          <div className="special__column md:w-2/3 lg:flex items-center mb-7 md:mb-0">
            <div className="special__subcolumn lg:w-1/2 lg:pr-5">
              <div className="special__elem flex mb-6 lg:mb-8">
                <div className="special__elem__column mr-6 pt-8">
                  <div className="special__elem__icon w-16 h-16 bg-almostWhite box-shadow2 rounded-lg flex items-center justify-center">
                    <img src={icon3} alt="" />
                  </div>
                </div>
                <div className="special__elem__column">
                  <div className="special__elem__title text-2xl lg:text-3xl font-semibold pb-2">
                    Online format
                  </div>
                  <div className="special__elem__subtitle text-xl">
                    UIREN uses an online format that allows lessons to be
                    available to children in all cities and regions of the
                    country.
                  </div>
                </div>
              </div>
              <div className="special__elem flex mb-6">
                <div className="special__elem__column mr-6 pt-8">
                  <div className="special__elem__icon w-16 h-16 bg-lightPink box-shadow2 rounded-lg flex items-center justify-center">
                    <img src={icon4} alt="" />
                  </div>
                </div>
                <div className="special__elem__column">
                  <div className="special__elem__title text-2xl lg:text-3xl font-semibold pb-2">
                    1 and 1 with teacher
                  </div>
                  <div className="special__elem__subtitle text-xl">
                    UIREN tutors provide individualized lessons tailored to each
                    student's unique needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="special__subcolumn lg:w-1/2 lg:pl-5">
              <div className="special__elem flex">
                <div className="special__elem__column mr-6 pt-8">
                  <div className="special__elem__icon w-16 h-16 bg-lightBlue box-shadow2 rounded-lg flex items-center justify-center">
                    <img src={icon5} alt="" />
                  </div>
                </div>
                <div className="special__elem__column">
                  <div className="special__elem__title text-2xl lg:text-3xl font-semibold pb-2">
                    100% Free
                  </div>
                  <div className="special__elem__subtitle text-xl">
                    UIREN offers free tutoring and mentoring services to
                    children in need.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="special__column flex justify-center mx-auto w-2/3 md:w-1/3">
            <img className="lg-translate-y-1/4" src={image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
