import { useEffect } from 'react';

export const useClickOutside = (isActive, refs, callback) => {
  const handleClickOutside = event => {
    const isOutside = ref => ref.current && document.body.contains(ref.current) && !ref.current.contains(event.target);

    if (Array.isArray(refs)) {
      if (isActive && refs.every(ref => ref && ref.current && isOutside(ref))) {
        callback();
      }
    } else {
      if (isActive && refs && refs.current && isOutside(refs)) {
        callback();
      }
    }
  };

  useEffect(() => {
    const options = { passive: true };

    document.addEventListener('mousedown', handleClickOutside, options);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, options);
    };
  }, [isActive, refs, callback]);
};
