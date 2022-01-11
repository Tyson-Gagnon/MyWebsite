import styled from "styled-components";


export const Wrapper = styled.div`

display: flex;
justify-content: flex-start;
flex-direction: row;
background: url('https://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-23.jpg');

`;

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    align-items: center;
    border-right: 2px solid black;

    h1{
        padding-top: 5vh;
        
    }

    .icon{
        transform: scale(4);
        color: white;
    }

    h3{
        color: white;
        margin-bottom: 40vh ;
    }

`;

export const Content = styled.div`
display: flex;

justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
margin-bottom: 5vh ;

padding: 10px;
padding-right: 10vw;

input{
    background: transparent;
    border-right: 0;
    height: 30px;
    font-size: var(--fontBig);
    width: 70%;
    margin-bottom: 7vh;
    color: black;
    border-top: none;
    border-left: none;
    outline: 0;
    color: white;
    border-color: black;
    background: rgba(0,0,0, .5);
}

#messageBox{
    background: rgba(0,0,0, .5);
    height: 30vh;
    font-size: var(--fontMed);
    width: 80%;
    color: white;
    border-color: black;
  
    outline: 0;
}

    .button{
        margin-top: 5vh ;
        background: black;
        border: 0;
        color: white;
        height: 10%;
        font-size: var(--fontMed);
        width: 25%;
        resize: 0;
        cursor: pointer;
    }


`;