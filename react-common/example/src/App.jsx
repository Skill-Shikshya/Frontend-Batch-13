import { useState } from "react";
import "./App.css";
import Layout from "./components/Main/Layout";
import Pages from "./components/Main/Pages";

function App() {
  const [page, setPage] = useState("home-page");
  const [selected, setSelected] = useState([]);

  function setPageFunction(pageName) {
    setPage(pageName + "-page");
  }
  const count = selected.length;
  return (
    <>
      <Layout count={count} setPage={setPageFunction} page={page}>
        <Pages selected={selected} setSelected={setSelected} page={page} />
      </Layout>
    </>
  );
}

export default App;
