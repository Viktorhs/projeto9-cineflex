import styled from "styled-components"

export default function Footer({title, posterURL, sessionDay, sessionHour}) {
    return(
        <SessionInf>
            <div>
                <img src={posterURL} alt = 'movie-poster'/>
            </div>
            <span>
                <h3>{title}</h3>
                {(!sessionHour) ? <h3>{sessionDay}</h3> : <h3>{sessionDay} - {sessionHour}</h3>}
            </span>
        </SessionInf>
    
)
}

const SessionInf = styled.footer`
    position: fixed;
    z-index: 4;
    width: 100vw;
    height: 117px;
    padding: 10px;
    left: 0px;
    bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: #DFE6ED;
    border-top: 1px solid #9EADBA;

    div{
        width: 64px;
        height: 89px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-right: 14px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    h3{
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }

`