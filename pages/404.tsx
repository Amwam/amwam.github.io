import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath[router.asPath.length - 1] === '/') {
      window.location.href = router.asPath.slice(0, router.asPath.length - 1);
    }
  }, [router.asPath]);

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for could not be found."
        canonical="https://amwam.me/404"
      />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
}
