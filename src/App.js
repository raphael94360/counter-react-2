import "./App.scss"
import Header from "./components/Header"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [counters, setCounters] = useState([0])
  const newTab = [...counters]
  const display = () => {
    if (counters.length < 3) {
      newTab.push(0)
      setCounters(newTab)
    }
  }

  return (
    <div className="App">
      <Header title={"REACT COUNTER 2"} />
      <button onClick={display}> Add a counter </button>

      <main>
        {counters.map((element, index) => {
          return (
            <div key={index}>
              <Counter value={element} setCounters={setCounters} counters={counters} newTab={newTab} numero={index} key={index} />
            </div>
          )
        })}
      </main>

      <Footer text={"React Counter 2 made with React by Raphaël"} />
    </div>
  )
}

export default App
