import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Description from "../description/Description";
import CardMovie from "./CardMovies";
import Loading from "../loading/Loading";

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
            <>
                <Description>Selecione o filme</Description>
                <List>
                    {movies.map((r, index) => <CardMovie key = {index} moviePoster = {r.posterURL} movieID={r.id}/>)}
                </List>
            </>
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