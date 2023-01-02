import Head from 'next/head';
import BlogsComponent, {
  getStaticProps as _getStaticProps,
} from 'components/Blogs';

export default function Blogs(props: any) {
  return (
    <>
      <Head>
        <title>Andreas Sujono Blogs - Learn Up to Date technology news</title>
      </Head>
      <BlogsComponent {...props} />
    </>
  );
}

export async function getStaticProps() {
  return _getStaticProps();
}
