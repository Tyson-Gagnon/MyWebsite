import { Wrapper, Content } from "./NotFound.styles";
import errorPic from '../images/dog.gif';

function NotFound() {
    return (
        <Wrapper>
            <Content>
                <h1>Error 404: Not found!</h1>
                <img src={errorPic}alt="404" />
            </Content>
        </Wrapper>
    )
}

export default NotFound
