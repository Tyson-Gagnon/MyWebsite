import {Wrapper, Content, Text, Image} from './Home.styles';
import myimage from '../../images/me.jpg';

function Home() {
    return (
        <Wrapper>
            <Content>
                <Text>
                    <h1>Welcome!</h1>
                    <h3>Hi! Welcome to my website! I made this website with ReactJS so that i can tell you about me
                        and show you some of my projects that I created!
                    </h3>
                </Text>
                <Image src={myimage} />
            </Content>
        </Wrapper>

    )
}

export default Home