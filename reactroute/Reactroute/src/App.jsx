
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Home()
{
return <h1>THIS IS MY HOME PAGE</h1>
}
  function About(){
return <h1>THIS IS MY ABOUT PAGE</h1>
}


const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )


}





export default App
