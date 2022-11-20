import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WelcomeContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  max-width: 450px;
  margin-left: 100px;

  h2{
    font-size: ${({ theme }) => theme.fontSize.h5};
    letter-spacing: 4.75p;
    text-transform: uppercase;
  }

  h1{
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: ${({ theme }) => theme.fontWeights.light};;
    text-transform: uppercase;
  }

  p{
    line-height: 32px;
  }
`

export const ExploreContainer = styled.div`
  width: 274px;
  height: 274px;
  border-radius: calc(274px/2);
  -moz-border-radius: calc(274px/2);
  -webkit-border-radius: calc(274px/2);

  background-color: white;
  text-align: center;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 200px;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &:hover{
    
  }
`