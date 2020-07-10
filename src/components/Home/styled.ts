import styled from 'styled-components';
import Box from '../UI/Box/Box';
// import media from '../../styles/breakpoints';

export interface HeadingProps {
  linearGradientGreen?: boolean;
}

export const Heading = styled(Box)<HeadingProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;
  background-image: ${(props) => (props.linearGradientGreen ? 'linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)' : 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)')};

  > h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #000;
    font-family: 'Permanent Marker', cursive;
    font-size: 3.125rem;
    text-align: center;
  }
`;

export const VideoContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  /* padding: 3.25rem 1.25rem; */
  display: flex;
  align-items: center;
  z-index: 1;
  overflow: hidden;
`;

export const Footer = styled(Box)`
  position: relative;
  z-index: 3;
  padding: 3.25rem 1.25rem;
  color: #FFF;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: 'Permanent Marker', cursive;
    font-size: 2.5rem;
    text-align: left;
  }
`;
