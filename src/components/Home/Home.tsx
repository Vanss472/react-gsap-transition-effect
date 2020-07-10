import React from 'react';
import Container from '../UI/Container';
import Embed from '../UI/Embed';
import * as H from './styled';

import mobileVideo from '../../assets/mobile-video.mp4';
import desktopVideo from '../../assets/desktop-video.mp4';
import ScrollEffect from '../UI/Transition/ScrollEffect';

const Home: React.FC = () => (
  <>
  <H.Heading linearGradientGreen>
    <h1>
      React: GSAP Transition Effect
    </h1>
    <p>Scroll down to see the effect</p>
  </H.Heading>
  <ScrollEffect>
    <H.VideoContainer className="video-container">
      <Container>
        <Embed src={mobileVideo} className="m-video" />
        <Embed src={desktopVideo} className="d-video" />
      </Container>
    </H.VideoContainer>
    <H.Footer className="footer-container">
      <Container>
        <h2>Section Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis soluta sit architecto laboriosam consectetur, fugiat doloribus voluptatibus dolore ipsam quibusdam facere suscipit a, voluptas, similique perferendis? Velit quasi nam debitis!</p>
        <p>Molestias inventore dolores velit eos modi fuga quidem atque nam animi cum nesciunt laboriosam consectetur perferendis ipsum asperiores dignissimos, corporis ut distinctio! Consectetur tenetur sint explicabo similique, nisi nesciunt tempora.</p>
        <p>Odit odio distinctio accusantium! Adipisci rerum voluptate odio voluptatum suscipit consequuntur laboriosam cum maxime architecto ad consequatur repellendus quasi excepturi sit placeat hic, iusto quae fugiat velit quam eius explicabo!</p>
        <p>Deserunt sint tempora facilis explicabo blanditiis vero consequuntur! Magni debitis placeat dolorem temporibus eaque, atque vitae laudantium porro vero, hic autem nisi impedit dicta iste, cumque velit assumenda! Provident, non.</p>
        <p>Eius quod earum asperiores consequuntur tenetur quidem tempore ratione accusantium ut aliquam quis maxime, alias mollitia dolor atque commodi illum soluta nulla eaque dolore. Saepe optio eos velit necessitatibus delectus.</p>
      </Container>
    </H.Footer>
  </ScrollEffect>
  </>
);

export default Home;
