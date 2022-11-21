import React, { useState } from 'react';

import {
  DestinationsPage,
  DestinationsContainer,
  Header,
  ImageContainer,
  DestinationContent,
  DestinationStats,
  DestinationMenu,
  DestinationMenuItem,
} from './destination.styles';

import content from '../../assets/content/data.json';

const Destinations = () => {
  const [page, setPage] = useState(0);
  const { name, description, images, distance, travel } = content.destinations[page];
  return (
    <DestinationsPage>
      <Header>
        <span>01</span> Pick your destination
      </Header>

      <DestinationsContainer>
        <ImageContainer>
          <img src={images.png} alt="" srcset="" />
        </ImageContainer>
        <DestinationContent>
          <DestinationMenu>
            {content.destinations.map((destination, index) => (
              <DestinationMenuItem key={destination.name} onClick={() => setPage(index)}>
                {destination.name}
              </DestinationMenuItem>
            ))}
          </DestinationMenu>
          <h2>{name}</h2>
          <p>{description}</p>
          <DestinationStats>
            <div>
              <h4>AVG. DISTANCE</h4>
              <h3>{distance}</h3>
            </div>
            <div>
              <h4>EST. TRAVEL TIME</h4>
              <h3>{travel}</h3>
            </div>
          </DestinationStats>
        </DestinationContent>
      </DestinationsContainer>
    </DestinationsPage>
  );
};

export default Destinations;
