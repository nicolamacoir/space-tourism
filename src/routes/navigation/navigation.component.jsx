import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { LogoContainer, MainPage, NavigationContainer, NavLink, NavLinkContainer } from './navigation.styles';
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <MainPage location={location === '' ? 'home' : location}>
      <NavigationContainer>
        <Link to="/">
          <LogoContainer />
        </Link>
        <NavLinkContainer>
          <NavLink to="/">
            <span>00</span> Home
          </NavLink>
          <NavLink to="/destination">
            <span>01</span> Destination
          </NavLink>
          <NavLink to="/crew">
            <span>02</span> Crew
          </NavLink>
          <NavLink to="/technology">
            <span>03</span> Technology
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </MainPage>
  );
};

export default Navigation;
