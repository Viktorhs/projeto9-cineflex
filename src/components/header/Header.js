import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    return(
        <HeaderBar>
            <Link to='/'>CINEFLEX</Link>
        </HeaderBar>
    )
}

const HeaderBar = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 67px;
    background: #C3CFD9;

    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color:#E8833A ;
    cursor: default;

`