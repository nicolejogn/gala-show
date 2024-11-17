'use client';
import {useEffect, useState} from 'react';

const isClient = typeof window !== 'undefined';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window?.innerWidth : 0,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: isClient ? window?.innerWidth : 0,
        });
      }, 150); // Adjust the debounce delay as needed
    };

    if (isClient) window?.addEventListener('resize', handleResize);

    return () => {
      if (isClient) window?.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return windowSize;
};
