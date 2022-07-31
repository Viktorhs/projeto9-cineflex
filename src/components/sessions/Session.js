import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({weekday, date, days, index}) {
    const showtime = days[index].showtimes
    return(
        <Container>
            <h3>{weekday} - {date}</h3>
            <div>
                {showtime.map((r, index) => <Link to ={`/assentos/${r.id}`} key={index} style={linkStyle} ><Button>{r.name}</Button></Link>)}
            </div>
        </Container>

    )
}

const Container = styled.div`
    width: 100vw;
    margin: 0 23px 23px 23px;

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;

        margin-bottom: 25px;
    }

    div{
        display: flex;
        align-items: center;
    }

`

const linkStyle = {
    textDecoration: "none",
  };

const Button = styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;

    margin-right: 9px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;

    &:active{
        filter: brightness(85%);
        transform: translateY(1px);
    }

    &&:hover{
        filter: brightness(90%);
    }
`