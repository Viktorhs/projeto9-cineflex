import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Forms({form, setForm, ids, successForm}) {

    let navigate = useNavigate()

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value,
          })
          

    }

    function reservar(e){
        
        e.preventDefault()
        console.log(form)
        const promisse = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', form)
        promisse.then(() => navigate('/sucesso',successForm))
    }

    return(
    <Form onSubmit={reservar}>
        <label>Nome do comprador:</label>
        <input type='text' name='name' required placeholder="Digite seu nome..." onChange={handleForm} value={form.description}/>
        <label>CPF do comprador:</label>
        <input type='text' name='cpf' maxLength='11' minLength='11'  required placeholder="Digite seu CPF..." onChange={handleForm} value={form.description}/>
        {(ids.length === 0) ? <Button color = '#7F4418' filter = '100%' px = '0px' disabled>Selecione assento(s)</Button> : <Button color = '#E8833A' filter = '80%' px = '1px' >Reservar assento(s)</Button>}
    </Form>
    )

}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    max-width: 380px;
    width: 95%;

    input{
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        width: 100%;
        height: 50px;
        padding: 10px;
        margin-bottom: 7px;
        background-color: #ffffff;
    }
    input::placeholder{
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        color: #AFAFAF;
    }
    label{
        width: 99%;
        margin-bottom: 4px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: start;

        color: #293845;
    }
`
const Button = styled.button`
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: ${props => props.color};
    border-radius: 3px;

    border: none;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    transition: 100ms;

    &:active{
        filter: brightness(${props => props.filter});
        transform: translateY(${props => props.px});
    }
`