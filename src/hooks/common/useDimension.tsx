import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  function getWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : 900;
    const height = hasWindow ? window.innerHeight : 900;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState({
    width: 900,
    height: 900,
  });

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    const hasWindow = typeof window !== 'undefined';
    if (hasWindow) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
