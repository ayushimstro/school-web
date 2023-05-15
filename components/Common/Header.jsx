import React, { useEffect, useState } from "react";
import {
  NavBar,
  StyledLI,
  StyledUL,
  StyledRUL,
  StyledRLI,
} from "../stylecomponents/Header.styled";
export default function Header() {
  const [cclass, setsClass] = useState("");
  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setsClass("navShrink");
    } else {
      setsClass("");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <div id="nav" className={cclass}>
      <NavBar background={"#810000"}>
        <StyledUL>
          <StyledLI>Home</StyledLI>
          <StyledLI>Home</StyledLI>
          <StyledLI>Home</StyledLI>
          <StyledLI>Home</StyledLI>
        </StyledUL>
        <div
          style={{
            background: "#fff",
            color: "#000",
            height: 90,
            width: 200,
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px;",
            alignItems: "center",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="logo"
        >
          ICSK-KW
        </div>
        <StyledRUL className="right-nav">
          <StyledRLI>Home</StyledRLI>
          <StyledRLI>Home</StyledRLI>
          <StyledRLI>Home</StyledRLI>
          <StyledRLI>Home</StyledRLI>
        </StyledRUL>
      </NavBar>
      <NavBar background={"#fff"} color="#000">
        <StyledUL>
          <StyledLI>Home</StyledLI>
          <StyledLI>Home</StyledLI>
          <StyledLI>Home</StyledLI>
          <StyledLI>Home</StyledLI>
        </StyledUL>

        <StyledRUL className="right-nav">
          <StyledRLI>Home</StyledRLI>
          <StyledRLI>Home</StyledRLI>
          <StyledRLI>Home</StyledRLI>
          <StyledRLI>Home</StyledRLI>
        </StyledRUL>
      </NavBar>
    </div>
  );
}
