import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Menu } from './Components/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
    <Menu/>
    <Outlet/>
    <Footer/>
    </Container>
      
    </>
  )
}

export default App
