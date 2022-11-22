import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { LogoContainer, MainPage, NavigationContainer, NavItem, NavItemContainer } from './navigation.styles';
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <MainPage location={location === '' ? 'home' : location}>
      <NavigationContainer>
        <Link to="/">
          <LogoContainer />
        </Link>
        <NavItemContainer>
          <NavItem to="/" activeClassName="active">
            <span>00</span> Home
          </NavItem>
          <NavItem to="/destination" activeClassName="active">
            <span>01</span> Destination
          </NavItem>
          <NavItem to="/crew" activeClassName="active">
            <span>02</span> Crew
          </NavItem>
          <NavItem to="/technology" activeClassName="active">
            <span>03</span> Technology
          </NavItem>
        </NavItemContainer>
      </NavigationContainer>
      <Outlet />
    </MainPage>
  );
};

export default Navigation;
