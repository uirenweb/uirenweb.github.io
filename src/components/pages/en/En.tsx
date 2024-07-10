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

export const En = () => {
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
      <Reviews />

      <Footer />
    </div>
  );
};
