import { useMedia } from 'react-use';

const queryMedia = '(min-width: 769px)';

const useDesktop = () => {
  const isDesktop = useMedia(queryMedia);
  return isDesktop;
};

export default useDesktop;
