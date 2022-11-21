import styled from 'styled-components';

export const DestinationsPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 200px;
`;

export const Header = styled.div`
  font-family: ${({ theme }) => theme.fonts.subheading};
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 4.725px;
  text-transform: uppercase;
  margin-bottom: 100px;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

export const DestinationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 445px;
`;

export const DestinationContent = styled.div`
  width: 475px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    text-transform: uppercase;
  }

  p {
    line-height: 32px;
  }
`;

export const DestinationMenu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const DestinationMenuItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.subheading};;
  font-size: ${({ theme }) => theme.fontSize.navtext};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.primaryColors.grey};
  line-height: 19.2px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  margin-right: 35px;
  cursor: pointer;
  padding-bottom: 10px;

  &:hover {
    border-bottom: 2px solid rgba(255,255,255,0.5);
  }

`

export const DestinationStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div{
    h4{
      color: ${({ theme }) => theme.primaryColors.grey};
      font-family: ${({ theme }) => theme.fonts.subheading};;
      font-size: ${({ theme }) => theme.fontSize.subheading2};
      font-weight: ${({ theme }) => theme.fontWeights.light};;
      line-height: 17px;
      letter-spacing: 2.3625px;
      text-transform: uppercase;
    }

    h3{
      font-family: ${({ theme }) => theme.fonts.heading};;
      font-size: ${({ theme }) => theme.fontSize.subheading1};
      font-weight: ${({ theme }) => theme.fontWeights.light};;
      line-height: 32px;
      text-transform: uppercase;
    }

  } 

`;
