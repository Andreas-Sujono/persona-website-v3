import { useRouter as useNextRouter } from 'next/router';

const useRouter = () => {
  const obj = useNextRouter();
  return {
    ...obj,
  };
};

export default useRouter;
