import icon1 from "../../../img/icons/data/1.svg";
import icon2 from "../../../img/icons/data/2.svg";
import icon3 from "../../../img/icons/data/3.svg";

export const Data = () => {
  return (
    <section className="data py-12 px-3">
      <div className="container mx-auto md:flex justify-between">
        <div className="data__elem flex items-center mb-3 md:m-0">
          <div className="data__column mr-6">
            <div className="data__icon w-84 h-84  bg-gradient-to-b from-green1 to-green2 rounded-full flex items-center justify-center">
              <img src={icon1} alt="no image" />
            </div>
          </div>
          <div className="data__column">
            <div className="data__number text-3xl font-PublicSans">100+</div>
            <div className="data__text text-xl font-PublicSans">Volunteers</div>
          </div>
        </div>
        <div className="data__elem flex items-center mb-3 md:m-0">
          <div className="data__column mr-6">
            <div className="data__icon w-84 h-84  bg-gradient-to-b from-purple1 to-purple2 rounded-full flex items-center justify-center">
              <img src={icon2} alt="no image" />
            </div>
          </div>
          <div className="data__column">
            <div className="data__number text-3xl font-PublicSans">100+</div>
            <div className="data__text text-xl font-PublicSans">Pupils</div>
          </div>
        </div>
        <div className="data__elem flex items-center">
          <div className="data__column mr-6">
            <div className="data__icon w-84 h-84  bg-gradient-to-b from-orange1 to-orange2 rounded-full flex items-center justify-center">
              <img src={icon3} alt="no image" />
            </div>
          </div>
          <div className="data__column">
            <div className="data__number text-3xl font-PublicSans">9</div>
            <div className="data__text text-xl font-PublicSans">Subjects of study</div>
          </div>
        </div>
      </div>
    </section>
  );
};
