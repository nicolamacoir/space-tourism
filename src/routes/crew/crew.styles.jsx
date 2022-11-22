import styled from 'styled-components';
import { MenuBullet } from '../../components/menubullet/menubullet.styles';


export const CrewPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 200px;
`

export const CrewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 445px;
`;

export const CrewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    text-transform: uppercase;
    line-height: 64px;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    text-transform: uppercase;
    line-height: 37px;
    opacity: 0.5;
  }

  p {
    color: ${({ theme }) => theme.primaryColors.grey};
    line-height: 32px;
    max-width: 444px;
    min-height: 128px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const MenuCircle = styled.div`
  color: white;
  font-size: 40px;
  cursor: pointer;
  margin-right: 20px;
  opacity: 0.17;

  ${({ active }) => active && `
    opacity: 1;
  `}
`