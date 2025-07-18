import { useState } from "react";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import TermsAndConditions from "../../pages/TermsAndConditions";
import Cart from "../../pages/Cart";

function Pages(props) {
  const { selected, setSelected } = props;
  let [state, setState] = useState(0);
  console.log(props);
  const { page } = props;
  switch (page) {
    case "home-page":
      return <Home selected={selected} setSelected={setSelected} />;
    case "about-page":
      return <About state={state} setState={setState} />;
    case "contact-page":
      return <Contact />;
    case "terms-conditions-page":
      return <TermsAndConditions />;
    case "cart-page":
      return <Cart selected={selected} />;
    default:
      return <>404 not found</>;
  }
}

export default Pages;
