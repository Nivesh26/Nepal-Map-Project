import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white selection:bg-blue-500 selection:text-white">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-2xl ring-1 ring-white/10 text-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Vite + React
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Now with Tailwind CSS v4!
          </p>
        </div>
        
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition-colors"
        >
          count is {count}
        </button>

        <p className="text-sm text-gray-400">
          Edit <code className="font-mono bg-gray-700 px-1 py-0.5 rounded text-blue-300">src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
