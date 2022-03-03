import { useState } from "react";
import Aboutsection from "../components/Aboutsection";
import Announcement from "../components/Announcement";
import Calculate from "../components/Calculate";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Flexpaymentsection from "../components/Flexpaymentsection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Properties from "../components/Properties";
import Servicesection from "../components/Servicesection";
import Sidebar from "../components/Sidebar";
import SlideMobile from "../components/SlideMobile";
import Slider from "../components/Slider";
import { SliderData, homeObjThree, homeObjTwo, homeObjOne } from "../Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <Slider />
      <SlideMobile slides={SliderData} />
      <Aboutsection {...homeObjThree} />
      <Flexpaymentsection {...homeObjOne}/>
      <Servicesection {...homeObjTwo} />
      <Categories />
      <Properties />
      <Calculate />
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Home;
