import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Test Box - Jika Tailwind berfungsi, box ini akan berwarna biru dengan text putih */}
      <div className="bg-blue-600 text-white p-8 rounded-xl shadow-2xl max-w-md mx-auto mt-10 mb-8">
        <h2 className="text-3xl font-bold mb-4">✅ Tailwind CSS Test</h2>
        <p className="text-lg mb-2">Jika Anda melihat:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Background biru</li>
          <li>Text putih</li>
          <li>Padding & border radius</li>
          <li>Shadow</li>
        </ul>
        <p className="mt-4 font-semibold text-yellow-300">Berarti Tailwind CSS SUDAH BERFUNGSI! 🎉</p>
      </div>

      {/* Original Content */}
      <div>
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
      </p>
    </>
  )
}

export default App
