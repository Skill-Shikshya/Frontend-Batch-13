import Button from "./Button";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";

let arr = [
  {
    name: "asim",
    roll: 123,
    marks: 100,
  },
  {
    name: "ram",
    roll: 3434,
    marks: 10,
  },
  {
    name: "shyam",
    roll: 232,
    marks: 20,
  },
  {
    name: "shyam",
    roll: 232,
    marks: 50,
  },
  {
    name: "shyam",
    roll: 232,
    marks: 60,
  },
  {
    name: "shyam",
    roll: 232,
    marks: 100,
  },
  {
    name: "shyam",
    roll: 232,
    marks: 60,
  },
];

let idCards = arr.map((item) => {
  return <Card marks={item.marks} name={item.name} roll={item.roll} />;
});

function onClick(args) {
  console.log(args);
}

function App() {
  return (
    <>
      {idCards}
      <Header />
      <button
        onClick={() => {
          onClick("click me clicked");
        }}
        title="this is button"
        className="p-4"
      >
        Click me
      </button>
      <main></main>

      <Button children="some button" />

      <Button
        clickMe={() => {
          console.log("hello i am delete button");
        }}
        children="asim"
      >
        <ul>
          <li>hello world</li>
        </ul>
      </Button>

      <Button className="bg-blue" children="test button" />
      <Card type="wedding" imgUrl="" buttonColor={""} cardColor={"red"}>
        <div>
          <img src="" alt="" />
        </div>
        <p>asd</p>
        <h1>asd</h1>
        <h6>asd</h6>
      </Card>

      <Footer />
    </>
  );
}

export default App;
