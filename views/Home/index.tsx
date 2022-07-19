import type { NextPage } from "next";

import Hero from "../../components/Hero";
import ProjectBoxGroup from "./components/ProjectBoxGroup/ProjectBoxGroup";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ProjectBoxGroup />
    </>
  );
};

export default Home;
