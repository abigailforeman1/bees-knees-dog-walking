"use client";

/**
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  const [currentDevice, updateCurrentDevice] = useState("desktop");

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      updateCurrentDevice(window.innerWidth < 767 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop")
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions]); // Empty array ensures that effect is only run on mount

  return { windowDimensions, currentDevice };
};

export default useWindowDimensions;