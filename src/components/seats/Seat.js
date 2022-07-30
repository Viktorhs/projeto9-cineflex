    import { useState } from "react"
import styled from "styled-components"

export default function Seat({isAvailable, children, ids, setIds, seatID}){
    const [color,setColor] = useState([['#C3CFD9', '#7B8B99'],['#FBE192', '#F7C52B']])
    let status
    let available
    const [selected, setSelected] = useState(false)


    function selectSeat(id){
        if(selected === false){
            setIds([...ids, seatID])
            setColor([['#8DD7CF', '#1AAE9E']])
            setSelected(true)
        }else if(selected === true){
            let removeID = ids.filter(a => a !== seatID)
            setIds([...removeID])
            setSelected(false)
            setColor([['#C3CFD9', '#7B8B99']])
        }
    }


    if(isAvailable === false){
        status = (() => alert("Esse assento não está disponível"))
        available = 1
    }else if(isAvailable === true){
        status = ((id) => selectSeat(id))
        available = 0
    }

    if(children.length === 1){
        return <Button color={color[available]}  onClick={() => status(children)}>0{children}</Button>
    }else{
        return <Button color={color[available]}  onClick={() => status(children)}>{children}</Button>
    }
    
}

const Button = styled.div`

    width: 24px;
    height: 24px;
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
    cursor: pointer;

    color: #000000;
`