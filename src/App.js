import "./App.scss";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState([]);

  const display = () => {
    const newTab = [...counter];
    newTab.push(<Counter />);
    setCounter(newTab);
    // return <div>{counter}</div>;
    counter.map((el, index) => {
      console.log(el);
      return <div key={index}>{el}</div>;
    });
  };

  return (
    <div className="App">
      <Header title={"REACT COUNTER 2"} />
      <button onClick={display}> Add a counter </button>

      <main>
        <Counter />
      </main>

      <Footer text={"React Counter 2 made with React by Raphaël"} />
    </div>
  );
}

export default App;
