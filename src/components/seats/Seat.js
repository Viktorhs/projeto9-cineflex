    import styled from "styled-components"

export default function Seat({isAvailable, children}){
    let color
    let pointer = 'pointer'
    if(isAvailable === false){
        color = ['#FBE192', '#F7C52B']
        pointer = 'default'
    }else{
        color = ['#C3CFD9', '#7B8B99']
    }

    if(children.length === 1){
        return <Button color={color} pointer={pointer}>0{children}</Button>
    }else{
        return <Button color={color} pointer={pointer}>{children}</Button>
    }
    
}

const Button = styled.div`

    width: 26px;
    height: 26px;
    background: ${props => props.color[0]};
    border: 1px solid ${props => props.color[1]};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    cursor: ${props => props.pointer};

    color: #000000;
`