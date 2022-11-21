import React from 'react';
import { ExploreContainer, HomeContainer, WelcomeContainer } from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeContainer>
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
        </p>
      </WelcomeContainer>
      <ExploreContainer>
        <h4>Explore</h4>
      </ExploreContainer>
    </HomeContainer>
  );
};

export default Home;
