import styled from "styled-components";

export const Hero = styled.div`
    background: ${props => props.type.background};
    color: ${props => props.type.color};
    border-radius: 15px;
    border: none;
    margin: 5px;
    padding: 20px;
`