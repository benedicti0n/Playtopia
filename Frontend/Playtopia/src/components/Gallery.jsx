import React, { useRef } from 'react';
import styles from '../Styles/page.module.scss';
import floating1 from '/EventBg/Desktop/bgImg1.jpg';
import floating2 from '/EventBg/Desktop/bgImg1.jpg';
import floating3 from '/EventBg/Desktop/bgImg2.jpg';
import floating4 from '/EventBg/Desktop/bgImg3.jpg';
import floating5 from '/EventBg/Desktop/bgImg4.jpg';
import floating6 from '/EventBg/Desktop/bgImg5.jpg';
import floating7 from '/EventBg/Desktop/bgImg6.jpg';
import floating8 from '/EventBg/Desktop/bgImg7.jpg';
function Gallery() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.1;
  const speed = 0.1;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    plane1.current.style.transform = `translate(${xForce}px, ${yForce}px)`;
    plane2.current.style.transform = `translate(${xForce * 0.5}px, ${yForce * 0.5}px)`;
    plane3.current.style.transform = `translate(${xForce * 0.25}px, ${yForce * 0.25}px)`;

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main onMouseMove={manageMouseMove} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
        <img src={floating1} alt="image" width={300} />
        <img src={floating2} alt="image" width={300} />
        <img src={floating7} alt="image" width={325} />
      </div>
      <div ref={plane2} className={styles.plane}>
        <img src={floating4} alt="image" width={350} />
        <img src={floating6} alt="image" width={300} />
        <img src={floating8} alt="image" width={325} />
      </div>
      <div ref={plane3} className={styles.plane}>
        <img src={floating3} alt="image" width={350} />
        <img src={floating5} alt="image" width={300} />
      </div>
      <div className={styles.title}>
        <h1 className='text-black'>Gallery</h1>
      </div>
    </main>
  );
}


export default Gallery