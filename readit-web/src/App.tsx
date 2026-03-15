import { Outlet } from 'react-router'
import './App.css'
import Navbar from './shared/components/navbar'

function App() {


  return (
    <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
