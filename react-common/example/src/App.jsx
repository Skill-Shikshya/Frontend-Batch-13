import { useState } from "react";
import "./App.css";
import Layout from "./components/Main/Layout";
import Pages from "./components/Main/Pages";

function App() {
  const [page, setPage] = useState("home-page");

  function setPageFunction(pageName) {
    setPage(pageName + "-page");
  }

  return (
    <>
      <Layout setPage={setPageFunction} page={page}>
        <Pages page={page} />
      </Layout>
    </>
  );
}

export default App;
