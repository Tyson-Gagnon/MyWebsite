import {Wrapper, Content, Icon} from './Footer.styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {


    function sendTo(url){
        window.open(url, '_blank');
    }

    return (
        <Wrapper>
            <Content>
            <Icon onClick={() => sendTo("https://www.instagram.com/tyson.gagnon/")}> <InstagramIcon /></Icon>
            <Icon onClick={() => sendTo("https://github.com/Tyson-Gagnon")}> <GitHubIcon /></Icon>
            <Icon onClick={() => sendTo("https://www.linkedin.com/in/tyson-gagnon-6b936a22a/")}> <LinkedInIcon /></Icon>
            </Content>
        </Wrapper>
    )
}

export default Footer;