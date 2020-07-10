import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/breakpoints';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: calc(16/9 * 100%);
  overflow: hidden;

  ${media.desktop} {
    padding-bottom: calc(9/16 * 100%);
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type EmbedProps = {
  src: string;
  className?: string;
}

const Embed: React.FunctionComponent<EmbedProps> = ({ src, className }: EmbedProps) => (
  <VideoWrapper className={className}>
    <video src={src} autoPlay loop muted playsInline></video>
  </VideoWrapper>
);

export default Embed;
