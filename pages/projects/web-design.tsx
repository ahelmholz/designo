import React from "react";
import WorkView from "../../views/WorkView";

const project = {
  imageUrl: "/appdesign.png",
  title: "PHOTON",
  body: "A state-of-the-art music player with high-resolution audio and DSP effects",
};
const projects = [project, project, project, project, project];
const WebDesignPage = () => {
  return (
    <WorkView
      workHeader={{
        title: "Web Design",
        body: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
      }}
      projects={projects}
      projectBoxOne={{
        header: "App Design",
        href: "/projects/app-design",
        backgroundImageUrl: "/appdesign.png",
      }}
      projectBoxTwo={{
        header: "Graphic Design",
        href: "/projects/graphic-design",
        backgroundImageUrl: "/graphicdesign.png",
      }}
    />
  );
};

export default WebDesignPage;
