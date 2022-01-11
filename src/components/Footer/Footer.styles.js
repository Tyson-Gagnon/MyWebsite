import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 10vh;
    background: rgba(0,0,0,1);

`;


export const Content = styled.div`
   

`;

export const Icon = styled.button`
margin: 3vh;
background: transparent;
color: white;
border: 0;
transform: scale(2);
cursor: pointer;

:hover{
    color: purple;
    animation: pulse 1s infinite;
    animation-direction: alternate;
    @keyframes pulse {
    to{

        transform: scale(2.7);
    }
     from{
        transform: scale(2);
        }
    }
}



`;