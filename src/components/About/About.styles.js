import styled from "styled-components";

export const Wrapper = styled.div`
    background: url('https://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-23.jpg');
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`

    margin-top: 5%;
    background: rgba(10,10,10, .7);
    height: 80%;
    width: 80%;
    display: flex;
    align-items: center;
    animation: bruh 1s;

    @keyframes bruh {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    
    h1{
        padding-left: 6vw;
    }

    h3{
        padding-left: 6vw;
        color: var(--lightGrey);
    }

`;

export const Image = styled.img`
    margin: auto;
    margin-right: 8vw;
    width: 400px;
    height: 400px;

`;