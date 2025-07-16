import { useState } from "react";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import TermsAndConditions from "../../pages/TermsAndConditions";

function Pages(props) {
  let [state, setState] = useState(0);

  const { page } = props;
  switch (page) {
    case "home-page":
      return <Home />;
    case "about-page":
      return <About state={state} setState={setState} />;
    case "contact-page":
      return <Contact />;
    case "terms-conditions-page":
      return <TermsAndConditions />;
    default:
      return <>404 not found</>;
  }
}

export default Pages;
