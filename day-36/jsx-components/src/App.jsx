import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";

let arr = [
  {
    name: "kjasdn",
    roll: 123,
  },
  {
    name: "asdas",
    roll: 3434,
  },
  {
    name: "676",
    roll: 232,
  },
];

let mappedArray = arr.map((item) => {
  return (
    <div
      onClick={() => {
        onClick(item.name + " clicked");
      }}
      className="card"
    >
      <div>name:{item.name}</div>
      <div>roll:{item.roll}</div>
    </div>
  );
});

function onClick(args) {
  console.log(args);
}

function App() {
  return (
    <>
      {mappedArray}
      <Header />
      <button
        onClick={() => {
          onClick("click me clicked");
        }}
      >
        Click me
      </button>
      <main>
        <Button />
      </main>
      <Footer />
    </>
  );
}

export default App;
