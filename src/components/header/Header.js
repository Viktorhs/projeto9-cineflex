
import { useLocation, useNavigate} from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    let location = useLocation()
    let navigate = useNavigate()
    let hist = location.pathname
    
   function back(){
        navigate(-1)
   }

    return(
        <>
            <HeaderBar>
                {(hist !== '/') ? <Back onClick={() => back()}><ion-icon name="chevron-back-outline"></ion-icon></Back> : <></>}
                <h1>CINEFLEX</h1>
            </HeaderBar>
        </>

    )
}

const HeaderBar = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 67px;
    background: #C3CFD9;



    h1{
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color:#E8833A ;
        cursor: default;
    }

`

const Back = styled.div`
    position: absolute;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 2px solid #507DA4;
    border-radius: 20%;
    color: #E8833A;
    cursor: pointer;
    transition: 150ms;
    font-size: 22px;
    padding-right: 2px;

    &&:active{
        filter: brightness(85%);
        transform: translateY(1px);
    }
`