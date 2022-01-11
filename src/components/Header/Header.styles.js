import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 0;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    
    .link{
        margin-left: 4vw;
    }

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    padding: 20px 0;
    margin: 0 4vw;

    .link{
        text-decoration: none;
    }

    .buttons{
        margin-left: auto;
        margin-right: 2vw;
    }

`;

export const Image = styled.img`
    width: 200px;

    @media screen and (max-width: 500px){
        width: 150px;
    }
`;



export const Button = styled.button`
    margin-left: auto;
    border: 0;
    background: transparent;
    color: var(--darkGrey);
    font-size: var(--fontBig);
    animation: fadeOut 0.5s ease-in-out;
    border-radius: 10px;

    .Icon{
        color: var(--white);
        transform: scale(1.3) translateY(2px);
    }

    


    :hover{

        opacity: 100;
        display: block;
        cursor: pointer;
        border-radius: 10px;

        animation: fadeIn 1s;
        animation-fill-mode: forwards;  
        

        .Icon{
            color: var(--lightGrey);
        }
    

        @keyframes fadeIn{
            0%{

            }
            50%{
                border-left: 3px solid ;
            }
            75%{
                border-bottom: 3px solid ;
                border-top: 3px solid ;
                border-left: 3px solid ;
            }
            100%{
              color: var(--lightGrey);
              border-top: 3px solid;
              border-bottom: 3px solid;
              border-right: 3px solid;
              border-left: 3px solid;
              color: lightGrey;
              border-color: lightGrey;

            }
        }

        @keyframes fadeOut{
            0%{
                
              color: var(--lightGrey);
              border-top: 3px solid;
              border-bottom: 3px solid;
              border-right: 3px solid;
              border-left: 3px solid;
              color: lightGrey;
              border-color: lightGrey;
            }
            50%{
                border-bottom: 3px solid ;
                border-top: 3px solid ;
                border-left: 3px solid ;
            }
            75%{
                border-left: 3px solid ;
            }
            100%{

            }
        }

    }

    

`;