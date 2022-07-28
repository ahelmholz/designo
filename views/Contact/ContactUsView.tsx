import React from "react";
import MaxWidth from "@components/MaxWidth";

import ContactForm from "./components/ContactForm";

type Props = {};

const ContactUsView = (props: Props) => {
  return (
    <>
      <MaxWidth>
        <ContactForm />
      </MaxWidth>
    </>
  );
};

export default ContactUsView;
