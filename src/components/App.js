  
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../CSS/reset.css'
import GlobalStyle from "../globalStyles"
import Header from "./header/Header"
import ListMovies from './movies/listMovies'
import Seats from "./seats/Seats";
import Sessions from "./sessions/Sessions";
import Success from "./success/Success";

export default function App(){

  return(
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>

      <Routes>
        <Route path='/' element={<ListMovies />}/>
        <Route path="/sessoes/:idFilme" element={<Sessions />}/>
        <Route path="/assentos/:idSessao" element={<Seats />}/>
        <Route path="/sucesso" element={<Success />}/>
      </Routes>
    </BrowserRouter>


      
    </>
  )
}