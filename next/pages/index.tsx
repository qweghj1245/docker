import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const IndexPage = (props: any) => {
  console.log('ppp', props);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>{props.msg}</p>
    </Layout>
  )
}

export async function getServerSideProps () {
  const response = await fetch("http://webserver:80/api/post").then((res) => res.json());
  return {
    props: { response }
  }
}

export default IndexPage
