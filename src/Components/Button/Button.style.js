import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.type.background};
  color: ${(props) => props.type.color};
  border: 1px solid black;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.5rem;
`;
