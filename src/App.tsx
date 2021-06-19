import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-lg m-auto antialiased">
        <main className="p-2 text-center mb-4">
          <img src={logo} alt="logo" />
          <h1 className="text-3xl text-pink-600 mb-4">Hello Vite + React!</h1>
          <div>
            <button
              className="bg-pink-600 text-gray-50 px-4 py-2 rounded-sm mb-4"
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </div>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
        </main>
        <footer>
          <p className="text-center">
            <a
              className="underline"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="underline"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
