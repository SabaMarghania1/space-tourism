

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import data from "./data.json"
import HomePage from "./Pages/HomePage"
import Crew from "./Pages/Crew"
import Destinations from "./Pages/Destinations"
import Technologys from "./Pages/Technologys"
console.log(data.crew[0].images.png)
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/destinations" element={<Destinations/>}/>
      <Route path="/technologys" element = {<Technologys/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}
