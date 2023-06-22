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

export const StyledBanner = styled.div`
  // background-image: ${(props) => `url(${props.background} )`};
  // background-repeat: no-repeat;
  // background-size: cover;
`;
