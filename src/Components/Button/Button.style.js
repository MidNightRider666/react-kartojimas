import styled from "styled-components"

export const Button = styled.button`
background: ${(props) => props.type.background};
color: ${(props) => props.type.color};
border-radius: 1rem;
display: inline-block ;
font-size: 0.5rem;
`