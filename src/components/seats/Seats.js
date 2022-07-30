import Description from "../description/Description"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "../footer/Footer"
import styled from "styled-components"
import Loading from "../loading/Loading"
import Seat from "./Seat"

export default function Seats() {
    const [sessionInf, setSessionInf] = useState([])
    const [seat, setSeat] = useState([])
    const { idSessao } = useParams()

    useEffect(() => {
        
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((r) => {setSessionInf(r.data)
                                setSeat(r.data.seats)
                                })
    },[idSessao])

    console.log(seat)

    if(sessionInf.length === 0){
        return <Loading/>
    }else{
        return(
            <>
                <Description>Selecione o(s) assento(s)</Description>
                <Container>
                    <List>
                        {seat.map((r, index) => <Seat isAvailable={r.isAvailable} key={index}>{r.name}</Seat>)}
                    </List>
                    <div className="side">
                        <span>
                            <Circle color='#8DD7CF'  border='#1AAE9E'/>
                            <p>Selecionado</p>
                        </span>
                        <span>
                            <Circle color='#C3CFD9 ' border='#7B8B99'/>
                            <p>Disponivel</p>
                        </span>
                        <span>
                            <Circle color='#FBE192' border='#F7C52B'/>
                            <p>Indisponivel</p>
                        </span>
                    </div>
                </Container>
                <Footer title={sessionInf.movie.title} posterURL={sessionInf.movie.posterURL} sessionDay={sessionInf.day.weekday} sessionHour={sessionInf.name}/>
            </>
    
        )
    }

}

const Container = styled.div`
    margin-bottom: 143px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .side{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
    span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    span p{
        margin-top: 10px;

        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`
const List = styled.div`
    &&{  width: 375px;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 8px;
        grid-row-gap: 19px;}
`

const Circle = styled.div`

    margin: 0 42px;
    width: 26px;
    height: 26px;
    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 50%;
`