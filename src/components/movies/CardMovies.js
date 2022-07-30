import { Link } from "react-router-dom"
import styled from "styled-components"

export default function CardMovie({moviePoster, movieID}) {
    return(
        <Link to ={`/sessoes/${movieID}`}>
            <Container>
                <img src = {moviePoster} alt = 'movie-poster'/>
            </Container>
        </Link>
    )
}

const Container = styled.div `
    width: 145px;
    height: 209px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 15px 11px 15px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    cursor: pointer;

    img{
        width: 129px;
        height: 193px;
    }
`