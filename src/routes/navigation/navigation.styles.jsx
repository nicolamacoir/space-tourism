import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg';

export const MainPage = styled.div` 
  background: url(${props => `./assets/backgrounds/background-${props.location}-desktop.jpg`}) no-repeat;
  background-size: cover;
  height: 100%;
`

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const LogoContainer = styled(LogoSvg)`
  margin-left: 30px;
`

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 165px;
  padding-left: 123px;
  
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
`

export const NavLink = styled(Link)`
  padding: 38px 15px;
  cursor: pointer;
  margin: 0

  span{
    font-weight: bolder;
  }

  &:active {
    border-bottom: 3px solid rgba(255,255,255,1);
  }

  &:hover {
    border-bottom: 3px solid rgba(255,255,255,0.5);
    padding-bottom: 35px;
  }
`