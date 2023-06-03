import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Gotham";
  background: ${(props) =>
    props.background ? props.background : "#000"} !important;
  height: 38px;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

export const StyledLI = styled.li`
  display: inline-block;
  padding: 5px 20px;
  cursor: pointer;
`;

export const StyleLink = styled(Link)`
  ${StyledLI}:hover {
    color: #fff;
  }
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

export const StyleSpan = styled.span`
  color: ${(props) => (props.color ? props.color : "#000")};
`;

export const StyledButton = styled.button`
  color: ${(props) => (props.color ? props.color : "#185b2d")};
  background: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "transparent"};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #185b2d;
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
    border: none;
    background: #185b2d;
  }
`;
