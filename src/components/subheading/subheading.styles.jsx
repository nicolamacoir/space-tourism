import styled from 'styled-components';

export const SubHeading = styled.div`
  font-family: ${({ theme }) => theme.fonts.subheading};
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 4.725px;
  text-transform: uppercase;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;