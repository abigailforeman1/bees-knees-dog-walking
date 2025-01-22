/**
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      console.log("resizing")
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions]); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default useWindowDimensions;