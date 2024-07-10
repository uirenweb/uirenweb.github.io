import logo from "../../../img/icons/logo.png";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex justify-around px-8 lg:px-12 xl:px-16 py-5 items-center"
    >
      <div className="footer__logo mr-4">
        <img src={logo} alt="" />
      </div>
      <div className="lg:flex">
        <div className="footer__column mb-4 lg:mb-0 lg:mr-4">
          <div className="footer__text pb-10 text-darkBlue text-2xl xl:text-3xl font-bold">
            WhatsApp:
          </div>
          <div className="footer__data text-xl xl:text-2xl text-darkBlue">
            +7 777 001 9850
          </div>
        </div>
        <div className="footer__column mb-4 lg:mb-0 lg:mr-4">
          <div className="footer__text pb-10 text-darkBlue text-2xl xl:text-3xl font-bold">
            Электронды пошта:
          </div>
          <div className="footer__data text-xl xl:text-2xl text-darkBlue">
            bekae07@gmail.com
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__text pb-10 text-darkBlue text-2xl xl:text-3xl font-bold">
            Instagram:
          </div>
          <div className="footer__data text-xl xl:text-2xl text-darkBlue">
            @uiren.kz
          </div>
        </div>
      </div>
    </footer>
  );
};
