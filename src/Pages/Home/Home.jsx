import React from "react";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Courses from "../Courses/Courses";
import EducationStats from "../EducationStats/EducationStats";
import TeamGrid from "../Teacher/Teacher";
import Events from "../Events/Events";
import Banner from "../Banner/Banner";
import Explores from "../Explore/Explores/Explores";
import Education_logo from "../Education_logo/Education_logo";
import Blog from "../Blog/Blog";
import Sholoarship from "../Sholoarship/Sholoarship";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <EducationStats></EducationStats>
      <Sholoarship></Sholoarship>
      <Courses></Courses>
      <TeamGrid></TeamGrid>
      <Banner></Banner>
      <Events></Events>
      <Explores></Explores>
      <Blog></Blog>
      <Education_logo></Education_logo>
    </div>
  );
};

export default Home;
