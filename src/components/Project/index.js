import {Wrapper, Content} from "./Project.styles";

function Project({title, description, link}) {
    return (
        <Wrapper>
            <Content>
                <h1>{title}</h1>
                <p>{description}</p>
                <hr />
                <a href={`${link}`} target="_blank" rel="noopener noreferrer"> {link.includes("github") ? "Github" : "Website"}</a>
            </Content>
        </Wrapper>
    )
}

export default Project
