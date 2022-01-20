import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
    align-items: center;
    height: 30vh;
    width: 15vw;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	background: rgba(050, 0, 100, 0.2);
    padding: 5px 0;
    border: 3px solid rgba(255,255,255, 0.2);

    h1{
        color: white;
    }
    p{
        color: white;
        padding-right: 20px;
        padding-left: 20px;
        overflow-wrap : break-word;
    }
    hr{
        padding-top: 0;
        color: white;
        width: 100%;
        opacity: .2;
    }

    a{  
        color: white;
    }
`;
