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
  padding: 20px 120px;
  
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  span{
    font-weight: bolder;
  }

  &:active {
    border-bottom: 2px solid rgba(255,255,255,1);
  }

  &:hover {
    border-bottom: 2px solid rgba(255,255,255,0.5);
  }
`