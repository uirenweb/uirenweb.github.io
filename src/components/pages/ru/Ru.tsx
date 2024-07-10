import { Application } from "./Application";
import { Button } from "./Button";
import { Data } from "./Data";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Mission } from "./Mission";
import { Navbar } from "./Navbar";
import { Process } from "./Process";
import { Reviews } from "./Reviews";
import { Special } from "./Special";
import { Subjects } from "./Subjects";

export const Ru = () => {
  return (
    <div className="pt-7">
      <Navbar />
      
      <Intro />
      <Data />
      <Mission />
      <Special />
      <Button />
      <Subjects />
      <Process />
      <FAQ />
      {/* <Application /> */}
      <Reviews />

      <Footer />
    </div>
  );
};
