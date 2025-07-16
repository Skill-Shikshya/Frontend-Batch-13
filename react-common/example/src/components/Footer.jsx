import React from "react";
import "./footer.css";
function Footer(props) {
  const { currentPage, setPage } = props;
  return (
    <footer>
      Copyright .... you are currently on {currentPage} , Check our{" "}
      <span
        onClick={() => {
          setPage("terms-conditions");
        }}
        className="hover:underline"
      >
        Terms and conditions
      </span>
    </footer>
  );
}

export default Footer;
