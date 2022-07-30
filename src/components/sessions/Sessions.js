import Description from "../description/Description"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "../footer/Footer"
import Session from "./Session"
import styled from "styled-components"
import Loading from "../loading/Loading"



export default function Sessions() {
    const [sessionInf, setSessionInf] = useState([])
    const [days, setDays] = useState([])
    const { idFilme } = useParams()

    useEffect(() => {
        
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
        promisse.then((r) => {setSessionInf(r.data)
                                setDays(r.data.days)
                                })
    },[idFilme])

    if(sessionInf.length === 0){
        return <Loading/>
    }else{
        return(
            <>
                <Description>Selecione o horário</Description>
                <Container>
                    {days.map((r, index) => <Session weekday = {r.weekday} date={r.date} key={index} days = {days} index={index}/>)}
                </Container>
                <Footer title={sessionInf.title} posterURL={sessionInf.posterURL}/>
            </>
    
        )
    }

}

const Container = styled.div`
    margin-bottom: 143px;

`