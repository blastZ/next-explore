import { useRef, useEffect } from 'react';

import { ASSETS_PREFIX } from '../env.config';

export default () => {
  const bg = useRef(null);
  const first = useRef(true);

  console.log(first.current);
  first.current = false;

  useEffect(() => {
    const image = new Image();
    image.src = 'https://i.ibb.co/pfKzjNG/bg-2048.jpg';
    image.onload = () => {
      bg.current.style.backgroundImage = `url(${image.src})`;
      bg.current.style.filter = 'none';
    };
  }, []);

  return (
    <div
      ref={bg}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 500,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'blur(5px)',
        backgroundImage: `url(../static/bg_small.jpg)`,
        transform: 'scale(1.1)',
        transition: 'filter 2s ease, backgroundImage 1s ease'
      }}
    />
  );
};
