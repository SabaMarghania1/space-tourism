

import { BrowserRouter,  Route, Routes } from "react-router-dom"

import HomePage from "./Pages/HomePage"
import Crew from "./Pages/Crew"
import Destinations from "./Pages/Destinations"
import Technologys from "./Pages/Technologys"
import data from "./data.json"


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/crew" element={<Crew crew={data.crew}/>}/>
      <Route path="/destinations" element={<Destinations destinations={data.destinations}/>}/>
      <Route path="/technologys" element = {<Technologys technology = {data.technology}/>}/>
    </Routes>
    </BrowserRouter>
  )
}
