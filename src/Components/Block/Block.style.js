import styled from "styled-components";

export const Block = styled.div`
  background: ${(props) => props.type.background};
  color: ${(props) => props.type.color};
  display: block;
  font-size: 0.5rem;
  margin: 15px ;
  padding: 15px ;
`;
