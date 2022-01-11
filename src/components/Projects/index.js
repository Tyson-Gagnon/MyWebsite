import Project from "../Project";
import {Wrapper, Content} from "./Projects.styles";
import Grid from "../Grid/";

function Projects() {
    return (
        <Wrapper>
            <Content>
                <Grid>
                <Project
                className="proj"
                    title="Calculator"
                    description={"Project done in react to demonstrate the useEffect hook. The calculator is a simple calculator that can add, subtract, multiply and divide. The calculator is also able to handle decimal numbers."}
                    link={"https://tysonscalcapp.netlify.app/"}
                />
                
                </Grid>
            </Content>
        </Wrapper>
    )
}

export default Projects
