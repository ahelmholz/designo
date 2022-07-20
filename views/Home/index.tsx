import type { NextPage } from "next";

import Hero from "../../components/Hero";
import Pillars from "./components/Pillars";
import ProjectBoxGroup from "./components/ProjectBoxGroup/ProjectBoxGroup";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ProjectBoxGroup />
      <Pillars />
    </>
  );
};

export default Home;
