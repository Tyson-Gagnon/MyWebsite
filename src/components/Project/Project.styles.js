import styled from "styled-components";

export const Wrapper = styled.div`
	background: rgba(0, 0,255, 0.7);
	display: flex;
    align-items: center;
    height: 30vh;
    width: 15vw;
`;

export const Content = styled.div`
	background: rgba(0, 0, 0, 0.7);
    padding: 5px 0;

    h1{
        color: white;
        text-align: center;
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
    }
`;
