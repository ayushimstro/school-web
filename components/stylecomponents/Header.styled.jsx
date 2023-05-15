import styled from "styled-components";
import { Navbar } from "react-bootstrap";
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Gotham";
  background-color: ${(props) =>
    props.background ? props.background : "#000"} !important;
  height: 38px;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

export const StyledLI = styled.li`
  display: inline-block;
  padding: 5px 20px;
`;
export const StyledRLI = styled.li`
  display: inline-block;
  padding: 5px 20px;
`;
export const StyledUL = styled.ul`
  list-style: none;
`;
export const StyledRUL = styled.ul`
  list-style: none;
`;
