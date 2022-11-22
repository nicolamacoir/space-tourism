import styled from 'styled-components';

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export const MenuBullet = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <circle cx="50" cy="50" r="50" />
  </Svg>
);
