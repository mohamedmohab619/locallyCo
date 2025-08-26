import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
    const [cards, setCards] = useState([]);

  function addCard() {
    setCards([...cards, {}]);
  }
  return (
    <>
      <Header/>
      <Button onAddCard={addCard} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-3 gap-2 w-full bg-gray-50">
      {cards.map((_, idx) => (
        <Card key={idx} />
      ))}
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
