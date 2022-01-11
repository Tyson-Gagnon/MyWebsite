import {Wrapper, Content, Image, Button} from './Header.styles';
import logo from '../../images/my-logo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Wrapper>
                <Link className='link image' to={"/"}><Image src={logo} alt="logo" /></Link>
            <Content>
                
                <Link className='link buttons' to={"/"}><Button> <HomeOutlinedIcon className="Icon" />  Home</Button></Link>
                <Link className='link buttons' to={"/about"}> <Button> <HelpOutlineOutlinedIcon className="Icon" />  About</Button></Link>
                <Link className='link buttons' to={"/projects"}> <Button> <AccountTreeOutlinedIcon className="Icon" />  Projects</Button></Link>
                <Link className='link buttons' to={"/contact"}><Button> <EmailOutlinedIcon className="Icon" />  Contact</Button></Link>
            </Content>
        </Wrapper>
    )
}

export default Header
