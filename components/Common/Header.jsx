import React, { useEffect, useState } from "react";
import {
  NavBar,
  StyledLI,
  StyledUL,
  StyledRUL,
  StyledRLI,
} from "../stylecomponents/Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { GetTheme } from "../../redux/slices/themeslices";
import { GetMenus } from "../../redux/slices/menusubmenuslices";
export default function Header() {
  const [cclass, setsClass] = useState("");
  const [lclass, setLClass] = useState("");
  const { theme } = useSelector((state) => state.theme);
  const { menus } = useSelector((state) => state.Menus);
  const dispatch = useDispatch();
  useEffect(() => {
    async function FetchTeme() {
      dispatch(GetTheme());
      dispatch(GetMenus());
    }
    FetchTeme();
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setsClass("navShrink");
      setLClass("logoShrink");
    } else {
      setsClass("");
      setLClass("");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <div id="nav" className={cclass}>
      <NavBar
        background={theme[0]?.navbarBgColor}
        color={theme[0]?.navbarColor}
      >
        <StyledUL>
          {menus.length > 0 &&
            menus
              ?.slice(0, 4)
              .map((men) => <StyledLI key={men._id}>{men.MenuName}</StyledLI>)}
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
          className={lclass}
          id="logo"
        >
          ICSK-KW
        </div>
        <StyledRUL className="right-nav">
          {menus.length > 0 &&
            menus
              ?.slice(4, 8)
              .map((men) => <StyledLI key={men._id}>{men.MenuName}</StyledLI>)}
        </StyledRUL>
      </NavBar>
      {/* <NavBar background={"#fff"} color="#000">
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
      </NavBar> */}
    </div>
  );
}
