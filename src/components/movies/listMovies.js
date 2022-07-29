import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardMovie from "./CardMovies";

export default function ListMovies() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")

        promisse.then(res => {setMovies(res.data)})
    }, [])
    
    if(movies.length === 0){
        return (
            <>
                <Loading/>
            </>
        )
    }else{
        return(
            <List>
                {movies.map((item, index) => <CardMovie key = {index} moviePoster = {item.posterURL} movieID={item.id}/>)}
            </List>

        )


    }


}

const List = styled.div `
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`

const Loading = styled.div`
&&,
&&:before,
&&:after {
  background: #c3cfd9;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
&& {
  color: #c3cfd9;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
&&:before,
&&:after {
  position: absolute;
  top: 0;
  content: '';
}
&&:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
&:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
`