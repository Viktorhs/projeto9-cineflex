import styled from "styled-components";

export default function Description({children}) {
    return(
        <Instruction>
            <h2>{children}</h2>
        </Instruction>
    )
}

const Instruction = styled.div `
    width: 100vw;
    height: 110px;

    display: flex;
    align-items: center;
    justify-content: center;

    h2{

        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
