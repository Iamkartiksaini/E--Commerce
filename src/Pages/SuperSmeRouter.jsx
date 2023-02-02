import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import "./sidebar.scss";
import { NavLink, Link } from "react-router-dom";
import {
  Button,
  Badge,
  OverlayPanel,
  MdDashboard,
  FaUserSecret,
  MdOutlineContentPaste,
} from "prime/prime_react";
import { InputText } from "primereact/inputtext";
import allActions from "redux/actions";
import { useDispatch } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import { color } from "@mui/system";

const SuperSmeRouter = () => {
  const user = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const notification = useRef(null);
  const [hideMenu, setHideMenu] = useState(false);
  const [routeCheck, setRouteCheck] = useState(false);

  const sideMenuItems = [
    {
      name: "dashboard",
      routerLink: "/supersme/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "contest",
      routerLink: "/supersme/contest",
      icon: <MdOutlineContentPaste />,
    },
  ];

  useLayoutEffect(() => {
    window.addEventListener("resize", () =>
      setHideMenu(window.innerWidth < 600 ? true : false)
    );
  }, []);

  useEffect(() => {
    if (window.location.pathname == "/supersme/contest") {
      setRouteCheck(true);
    } else {
      setRouteCheck(false);
    }
  }, [location]);

  const logoutClicked = async () => {
    dispatch(allActions.authActions.signOut());
  };

  return (
    <>
      <div className={routeCheck ? "removeShadow" : ""}>
        <div className={hideMenu ? "sidebar hide" : "sidebar"}>
          <div className="sidebarContent">
            <div className="logo">
              <Link to="/">
                <img
                  src={`/assets/navbarImages/${
                    hideMenu ? "sideLogo" : "mockwin_logo"
                  }.png`}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="userProfile">
              <div className="userNameFirstLetter">H</div>
              <div className="userName">
                <h2>Harsh Saini</h2>
                <p>Admin</p>
              </div>
            </div>
            <ul>
              {sideMenuItems.map((x, index) => (
                <li key={index}>
                  <NavLink
                    to={x.routerLink}
                    hover={x.name}
                    onClick={() => window.innerWidth < 768 && setHideMenu(true)}
                  >
                    {x.icon}
                    <span>{x.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="copyRights">
              <ul>
                <li>
                  <a className="logoutButton" onClick={logoutClicked}>
                    <MdOutlineLogout /> Logout
                  </a>
                </li>
              </ul>
              <p>
                © Copyright{" "}
                <span>
                  <b>On Mockwin</b>
                </span>
              </p>
            </div>
          </div>
          <div
            className={`content ${
              !hideMenu && window.innerWidth < 768 && "backdrop"
            }`}
          >
            <div className="menubar ">
              <h1>Overview</h1>

              <div className="nav-items">
                <div className="searchBar">
                  <input type="text" name="" id="search" placeholder="Search" />
                  <i className="pi pi-search"></i>
                </div>

                <i className="pi pi-bell"></i>
                <div className="profile">
                  <img
                    src="https://images.pexels.com/photos/9697913/pexels-photo-9697913.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    height="40px"
                    width="40px"
                    style={{ borderRadius: "50%" }}
                    alt=""
                  />
                  <div className="text">
                    <p>Kartik Saini</p>
                    <p>contest creator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="router">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperSmeRouter;
