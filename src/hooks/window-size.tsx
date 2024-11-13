'use client';
import {useEffect, useState} from 'react';


const isClient = typeof window !== 'undefined';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window?.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: isClient ? window?.innerWidth : 0,
      });
    };

    if (isClient)
      window?.addEventListener('resize', handleResize);


    return () => {
      if (isClient) window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};


