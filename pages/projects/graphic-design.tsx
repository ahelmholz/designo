import React from "react";
import WorkHeader from "../../components/WorkHeader/WorkHeader";
import WorkView from "../../views/WorkView";

const project = {
  imageUrl: "/appdesign.png",
  title: "PHOTON",
  body: "A state-of-the-art music player with high-resolution audio and DSP effects",
};
const projects = [project, project];

const GraphicDesignPage = () => {
  return (
    <>
      <WorkView
        workHeader={{
          title: "Graphic Design",
          body: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
        }}
        projects={projects}
        projectBoxOne={{
          header: "App Design",
          href: "/projects/app-design",
          backgroundImageUrl: "/appdesign.png",
        }}
        projectBoxTwo={{
          href: "/projects/web-design",
          header: "Web Design",
          backgroundImageUrl: "/webdesign.png",
        }}
      />
    </>
  );
};

export default GraphicDesignPage;
