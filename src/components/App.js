import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../CSS/reset.css'
import GlobalStyle from "../globalStyles"
import Header from "./header/Header"
import ListMovies from './movies/listMovies'

export default function App(){
  return(
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>

      <Routes>
        <Route path='/' element={<ListMovies />}/>
        <Route path="/sessoes/:idFilme"/>
        <Route path="/assentos/:idSessao"/>
      </Routes>
    </BrowserRouter>


      
    </>
  )
}