import { useState } from "react";
import "./App.css";
import Layout from "./components/Main/Layout";
import Main from "./components/Main/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Button from "./components/ui/Button";
function App() {
  const [page, setPage] = useState(<Home />);

  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-5 justify-center text-amber-900 ">
            <li
              onClick={() => {
                setPage(<Home />);
              }}
              className="px-2 py-1 border my-1"
            >
              Home
            </li>
            <li
              onClick={() => {
                setPage(<About />);
              }}
              className="px-2 py-1 border my-1"
            >
              About
            </li>
            <li
              onClick={() => {
                setPage(<Contact />);
              }}
              className="px-2 py-1 border my-1"
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>
      {page}
      <Button />
    </>
  );
}

export default App;
