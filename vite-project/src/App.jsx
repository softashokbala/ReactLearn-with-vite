// import { Fragment } from "react";
import ArraySample from "./components/ArraySample";
import LearnComponents from "./components/LearnComponents";
import Student from "./components/Student";
import "./css/app.css";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]

function App() {
  return (
    <>
      <LearnComponents />
      <Student name="kumar" age={43} isMarried={true} />
      <ArraySample items={items} />
    </>
  )
}


export default App
