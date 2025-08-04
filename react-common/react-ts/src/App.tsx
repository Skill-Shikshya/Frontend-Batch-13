import "./App.css";
import { authClient, baseClient } from "./axios/interceptor";
import Header from "./component/Header";
const data = { title: "tshirt" };
function App() {
  async function postProductAxios() {
    try {
      const res = await baseClient.post("/produasdasdcts", data);
      console.log("axios response", res);
    } catch (error) {
      console.log("axios error", error);
    }
  }
  async function postUserAxios() {
    try {
      const res = await baseClient.post("/products", data);
      console.log("axios response", res);
    } catch (error) {
      console.log("axios error", error);
    }
  }
  async function postsomethingAxios() {
    try {
      const res = await baseClient.post("/products", data);
      console.log("axios response", res);
    } catch (error) {
      console.log("axios error", error);
    }
  }
  async function getSOmething() {
    try {
      const res = await baseClient.post("/products", data);
      console.log("axios response", res);
    } catch (error) {
      console.log("axios error", error);
    }
  }

  return (
    <>
      Hello world
      <button onClick={postProductAxios}>Submit</button>
      <Header />
    </>
  );
}

export default App;
