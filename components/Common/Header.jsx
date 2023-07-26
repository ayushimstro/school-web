/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Script from "next/script";
import React, { useEffect, useState } from "react";
import {
  NavBar,
  StyledLI,
  StyledUL,
  StyledRUL,
  StyledRLI,
  StyleLink,
  StyledMUL,
  StyledMLI,
  StyledMRUL,
  StyledMRLI,
} from "../stylecomponents/Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { GetTheme } from "../../redux/slices/themeslices";
import { GetMenus, GetSubMenus } from "../../redux/slices/menusubmenuslices";
import Link from "next/link";
import { GetNews } from "../../services/websiteServices";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import useWindowDimensions from "./Dimensions";
import Modal from "react-responsive-modal";
import { Navbar } from "react-bootstrap";
export default function Header() {
  const [cclass, setsClass] = useState("");
  const [lclass, setLClass] = useState("normal-logo");
  const [searc, setSearch] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const { menus, submenus } = useSelector((state) => state.Menus);
  const [draweropen, setDraweropen] = useState(false);
  const { height, width } = useWindowDimensions();
  const filterSubmenu = (menuid) => {
    const data = submenus.filter((sub) => sub.menu == menuid);
    console.log(data, "Dadad");
    return data;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    async function FetchTeme() {
      dispatch(GetTheme());
      dispatch(GetMenus());
      dispatch(GetSubMenus());
    }
    FetchTeme();
  }, [dispatch]);
  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setsClass("navShrink");
      setLClass("logoShrink");
      setSearch(false);
    } else {
      setsClass("nav");
      setLClass("normal-logo");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  const onHandleSearch = () => {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      "https://cse.google.com/cse.js?cx=e60d373261a394525"
    );
    if (document.body == null) {
      document.head.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
    setSearch(!searc);
  };
  const renderSubMenu = (men) => {
    return;
    men.SubMenu == true && (
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    );
  };
  return (
    <div id="nav" className={cclass}>
      <NavBar background={"#273051"} height={"90px"}>
        <div>
          <img
            src="https://www.icsk-kw.com/assets_web/img/Logo-811.png"
            height={89}
          />
        </div>
        <div className="left-container">
          <div className="social-icons">
            <img src="/fb1.png" className="fbimg" />
            <img src="/insta.png"  />
            <img src="/twitter.png"  />
            <img src="/youtube.png"  />
          </div>
          <div className="Button-container">
            <button className="contact-us">Contact us now</button>
            <button className="enroll">Enroll Now</button>
          </div>
        </div>
      </NavBar>
      <NavBar background={"#fff"} color={theme[0]?.navbarColor}>
        {width > 600 ? (
          <>
            <StyledUL>
              {menus?.length > 0 &&
                menus.map((men) => (
                  <StyleLink
                    href={men.path}
                    key={men._id}
                    className={men.animation == true ? "blink" : ""}
                  >
                    <StyledLI>
                      {" "}
                      {men.MenuName}{" "}
                      {(men.SubMenu == true || men.submenu == true) && (
                        <div class="dropdown-content">
                          {filterSubmenu(men._id).map((sub) => (
                            <Link href={sub.path} key={sub._id}>
                              {sub.SubMenu}
                            </Link>
                          ))}
                        </div>
                      )}
                    </StyledLI>
                  </StyleLink>
                ))}
            </StyledUL>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
                cursor: "pointer",
              }}
              onClick={() => onHandleSearch()}
            >
              <img src="/searchi.png" height={20} />
            </div>
          </>
        ) : (
          <>
            <img
              src="/menu.png"
              style={{ padding: 6 }}
              onClick={setDraweropen}
            />
            <div
              style={{
                background: "#fff",
                color: "#000",
                height: 90,
                width: 200,
                zIndex: 1,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px;",
                alignItems: "center",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
              className={lclass}
              id="logo"
            >
              <img src="https://storage.cloud.google.com/icsk-assets/icsk-logo.jpeg" />
            </div>
            <Drawer
              open={draweropen}
              onClose={setDraweropen}
              direction="left"
              className="bla bla bla"
              enableOverlay
              style={{
                background: "#185b2d",
              }}
            >
              <div
                className="img-src"
                style={{ position: "absolute", right: "4px", top: "4px" }}
              >
                <img src="/cross.png" onClick={() => setDraweropen(false)} />
              </div>
              <StyledMUL>
                {menus?.length > 0 &&
                  menus?.slice(0, menus.length - 2).map((men) => (
                    <StyleLink
                      href={men.path}
                      key={men._id}
                      onClick={() => setDraweropen(false)}
                      className={men.animation == true ? "blink" : ""}
                    >
                      <StyledMLI>
                        {" "}
                        {men.MenuName}{" "}
                        {men.SubMenu == true && (
                          <div class="dropdown-content">
                            {filterSubmenu(men._id).map((sub) => (
                              <Link href={sub.path} key={sub._id}>
                                {sub.SubMenu}
                              </Link>
                            ))}
                          </div>
                        )}
                      </StyledMLI>
                    </StyleLink>
                  ))}
              </StyledMUL>
              <StyledMRUL className="right-nav">
                {menus?.length > 0 &&
                  menus?.slice(4, menus.length - 4).map((men) => (
                    <StyleLink
                      href={men.path}
                      key={men._id}
                      onClick={() => setDraweropen(false)}
                      className={men.animation == true ? "blink" : ""}
                    >
                      <StyledRLI>{men.MenuName}</StyledRLI>
                      {men.SubMenu == true && (
                        <div class="dropdown-content">
                          {filterSubmenu(men._id).map((sub) => (
                            <Link href={sub.path} key={sub._id}>
                              {sub.SubMenu}
                            </Link>
                          ))}
                        </div>
                      )}
                    </StyleLink>
                  ))}
              </StyledMRUL>
            </Drawer>
          </>
        )}
      </NavBar>

      <>
        <Modal
          open={searc}
          onClose={() => setSearch(false)}
          center
          styles={{
            modal: {
              borderRadius: 20,
            },
          }}
        >
          {/* <Script
              src="https://cse.google.com/cse.js?cx=e60d373261a394525"
              async
            /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h6>Search ICSK-KW</h6>
            <div class="gcse-searchbox-only"></div>
          </div>
        </Modal>
      </>
    </div>
  );
}
