import Head from 'next/head'
import BlogsComponent from 'components/Blogs'

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Andreas Sujono Blogs - Learn Up to Date technology news</title>
      </Head>
      <BlogsComponent />
    </>
  )
}
