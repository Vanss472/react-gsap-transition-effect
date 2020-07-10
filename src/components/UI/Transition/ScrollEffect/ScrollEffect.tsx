import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ScrollEffectProps = {
  children: React.ReactNode;
}

const ScrollEffect: React.FunctionComponent<ScrollEffectProps> = ({ children }: ScrollEffectProps) => {
  const animateStart = '.video-container';
  const desktopAnimate = '.d-video';
  const mobileAnimate = '.m-video';
  const animateEnd = '.footer-container';

  useEffect(() => {
    gsap.to([desktopAnimate, mobileAnimate], {
      scrollTrigger: {
        trigger: animateStart,
        scrub: true, // smooth scrubbing
        pinSpacing: false,
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=100%',
        anticipatePin: 1, // control when you scroll quickly
        markers: false,
        toggleActions: 'play pause reverse none',
      },
      scale: 2,
      ease: 'none',
    });

    gsap.to(animateEnd, {
      scrollTrigger: {
        trigger: animateStart,
        scrub: true,
        start: 'bottom center', // when the top of the trigger hits the top of the viewport
        markers: false,
        toggleActions: 'play pause reverse none',
      },
      backgroundColor: '#000',
      ease: 'none',
    });
  }, []);

  return (
   <div>{ children }</div>
  );
};

export default ScrollEffect;
