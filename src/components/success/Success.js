import styled from "styled-components"


export default function Success({successForm}) {

    function printa(){
        console.log(successForm)
    }

    return(
        <Container>
            <Instruction>
                <h2>Pedido feito <br/>com sucesso!</h2>
            </Instruction>
            <List>
                <h1>Filme e sessão</h1>
                <p>Enola Holmes</p>
                <p>24/06/2021 - 15:00</p>
            </List>
            <List>
                <h1>Ingressos</h1>
                <p>assento 1</p>
                <p>assento 2</p>
            </List>
            <List>
                <h1>Comprador</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </List>
            <button onClick={() => printa}>clica ae</button>
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