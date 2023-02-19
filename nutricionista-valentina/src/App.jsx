import { useState } from 'react'
import Header from './componentes/header/header'
import './App.css';
import Banner from './componentes/banner/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>
        
        <Banner></Banner>
    </>
  )
}
export default App
