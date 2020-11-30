import { useEffect } from 'react';
import Layout from '../components/Layout';

const IndexPage = (props: any) => {
  console.log(props);
  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((res) => console.log(res));
  })
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋 1121</h1>
      <p>123</p>
      <p>{props.msg}</p>
    </Layout>
  )
}

export async function getServerSideProps () {
  const response = await fetch("http://MultiDocker-env.eba-k62qj7bn.ap-northeast-1.elasticbeanstalk.com/api/post").then((res) => res.json());
  return {
    props: { ...response }
  }
}

export default IndexPage
