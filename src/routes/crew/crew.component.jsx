import { useState } from 'react';

import { CrewContainer, CrewContent, CrewPage, ImageContainer, MenuCircle, MenuContainer } from './crew.styles';
import SubHeading from '../../components/subheading/subheading.component';

import content from '../../assets/content/data.json';

const Crew = () => {
  const [page, setPage] = useState(0);
  const { name, images, role, bio } = content.crew[page];

  return (
    <CrewPage>
      <SubHeading>
        <span>02</span> Meet your crew
      </SubHeading>
      <CrewContainer>
        <CrewContent>
          <h4>{role}</h4>
          <h3>{name}</h3>
          <p>{bio}</p>
          <MenuContainer>
            {
              content.crew.map( (crew, index) => {
                return (
                  <MenuCircle onClick={ () => setPage(index)} active={index===page}>
                    &#8226;
                  </MenuCircle>
                )
              })
            }
          </MenuContainer>
        </CrewContent>
        <ImageContainer>
          <img src={images.png} alt="" srcset="" />
        </ImageContainer>
      </CrewContainer>
    </CrewPage>
  );
};

export default Crew;
