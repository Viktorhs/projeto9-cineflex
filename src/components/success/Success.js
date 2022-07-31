import { useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Success({successForm, setSuccessForm}) {

    let navigate = useNavigate()
    
    function backHome(){
        setSuccessForm({
            ...successForm,
            name:'',
            cpf:'',
            title:'',
            date:'',
            hour:'',
            ids:''
        })
        navigate('/')
    }

    return(
        <Container>
            <Instruction>
                <h2>Pedido feito <br/>com sucesso!</h2>
            </Instruction>
            <List>
                <h1>Filme e sessão</h1>
                <p>{successForm.title}</p>
                <p>{successForm.date} - {successForm.hour}</p>
            </List>
            <List>
                <h1>Ingressos</h1>
                {successForm.ids.map((id, index) => <p key={index}>assento {id}</p>)}
            </List>
            <List>
                <h1>Comprador</h1>
                <p>Nome: {successForm.name}</p>
                <p>CPF: {successForm.cpf}</p>
            </List>
            <Home onClick={() => backHome()}>Voltar pra Home</Home>
        </Container>
    )
}


const Instruction = styled.div `
    width: 100vw;
    height: 110px;

    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #247A6B;

    }
`
const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const List = styled.div`
    max-width: 380px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 25px;
    margin-bottom: 40px;

    h1{ 
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        margin-bottom: 6px;

        color: #293845;
    }
    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
`

const Home = styled.div`
    margin-top: 65px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    transition: 100ms;
    cursor: pointer;

    &:active{
        filter: brightness(85%);
        transform: translateY(1px);
    }
`