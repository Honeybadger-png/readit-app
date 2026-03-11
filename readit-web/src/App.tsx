import { Outlet } from 'react-router'
import './App.css'

function App() {


  return (
    <>
    <div className='bg-red-400'>Readit</div>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
