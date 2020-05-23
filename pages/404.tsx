import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  if (router.asPath[router.asPath.length - 1] === '/') {
    window.location.href = router.asPath.slice(0, router.asPath.length - 1);
  }

  return <h1>Sorry, page could not be found</h1>;
};
