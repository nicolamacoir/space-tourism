import React from 'react';
import { useLocation } from 'react-router-dom';
import { DestinationsContainer } from './destination.styles';

import content from '../../assets/content/data.json';

const Destinations = () => {
  const { name, description, distance, travel } = content['destinations'][0];
  return (
    <DestinationsContainer>
      <h5>01 Pick your destination</h5>
      
      <div className="destinationContent">
        <div className="destination-image"></div>
        <div className="destination-info">
          <div className="destination-menu"></div>
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="destination-stats">
            <div>
              <h4>AVG. DISTANCE</h4>
              <p>{distance}</p>
            </div>
            <h4>EST. TRAVEL TIME</h4>
            <p>{travel}</p>
            <div></div>
          </div>
        </div>
      </div>
    </DestinationsContainer>
  );
};

export default Destinations;
