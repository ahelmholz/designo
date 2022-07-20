import type { NextPage } from "next";

import Hero from "../../components/Hero";
import ProjectCTA from "../../components/ProjectCTA";
import Pillars from "./components/Pillars";
import ProjectBoxGroup from "./components/ProjectBoxGroup/ProjectBoxGroup";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ProjectBoxGroup />
      <Pillars />
      <ProjectCTA />
    </>
  );
};

export default Home;
