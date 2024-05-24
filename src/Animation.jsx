import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/style.css'; // Make sure to import your CSS stylesheet


function Animation() {
const animationWrapperRef = useRef(null);
  const startRef = useRef(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      startRef.current,
      { height: '0%' },
      { height: '100%', duration: 0.5, ease: 'power2.inOut' }
    )
    .fromTo(
      startRef.current,
      { width: '80%' },
      { width: '100%', duration: 0.6, ease: 'power2.inOut' }
    )
    .fromTo(
      sliderRef.current,
      { x: '-100%' },
      { x: '0%', duration: 0.5, ease: 'power2.inOut' },
      '-=0.6'
    )
    .fromTo(
      animationWrapperRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.3 }
    );

    const timer = setTimeout(() => {
      if (animationWrapperRef.current) {
        animationWrapperRef.current.style.pointerEvents = 'none';
      }
    }, 1400);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section ref={animationWrapperRef} className="animation-wrapper">
      <section className="animation">
        <div className="start" ref={startRef}>
          <img src={`${process.env.PUBLIC_URL}/image.png`} alt="" />
        </div>
      </section>
      <div className="slider" ref={sliderRef}></div>
    </section>
  )
}

export default Animation