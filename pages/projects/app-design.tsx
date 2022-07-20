import React from "react";
import WorkView from "../../views/WorkView";

const project = {
  imageUrl: "/appdesign.png",
  title: "PHOTON",
  body: "A state-of-the-art music player with high-resolution audio and DSP effects",
};
const projects = [project, project, project, project];

const AppDesignPage = () => {
  return (
    <>
      <WorkView
        workHeader={{
          title: "App Design",
          body: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
        }}
        projects={projects}
        projectBoxOne={{
          href: "/projects/web-design",
          header: "Web Design",
          backgroundImageUrl: "/webdesign.png",
        }}
        projectBoxTwo={{
          header: "Graphic Design",
          href: "/projects/graphic-design",
          backgroundImageUrl: "/graphicdesign.png",
        }}
      />
    </>
  );
};

export default AppDesignPage;
