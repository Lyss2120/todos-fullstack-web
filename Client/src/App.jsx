import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoWrapper from './components/TodoWrapper'
import TagList from './components/TagList'
import ShowTasks from './components/showTasks'

function App() {
  const [count, setCount] = useState(0)
  // bg-dark bg-gradient
  return (
    <>
      <div className="wrapper bg-light bg-gradient px-4 card">
        <h5 className='mt-5 fw-semibold mb-4'>Todo WebApp</h5>
        <ShowTasks />
        <TodoWrapper />
        <TagList />
      </div>
    </>
  )
}

export default App

// injectContext(
//   <React.StrictMode>
//   <App />
// </React.StrictMode>
// )