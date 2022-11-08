import { useEffect } from 'react';

export const useScroll = (callback) => {
  useEffect(() => {
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  }, [callback]);
};
