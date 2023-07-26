import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat";
  background: ${(props) =>
    props.background ? props.background : "#000"} !important;
  height: ${(props) => (props.height ? props.height : "38px")};
  width: 100%;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

export const StyledLI = styled.li`
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.9rem;
  cursor: pointer;
`;
export const StyledMLI = styled.li`
  display: block;
  padding: 15px;
  cursor: pointer;
`;

export const StyleLink = styled(Link)`
  ${StyledLI}:hover {
    color: #fcc92f;
  }
`;
export const StyledRLI = styled.li`
  display: inline-block;
  padding: 15px;
  color: #000;
`;
export const StyledMRLI = styled.li`
  display: block;
  padding: 5px 10px;
`;
export const StyledUL = styled.ul`
  list-style: none;
`;
export const StyledRUL = styled.ul`
  list-style: none;
`;
export const StyledMUL = styled.ul`
  list-style: none;
`;
export const StyledMRUL = styled.ul`
  list-style: none;
`;

export const StyleSpan = styled.span`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: 1.5rem;
`;

export const StyledButton = styled.button`
  color: ${(props) => (props.color ? props.color : "#185b2d")};
  background: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "transparent"};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #fcc92f;
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
    border: none;
    background: #fcc92f;
  }
`;
