import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋 1121</h1>
      <p>123</p>
    </Layout>
  )
}

// export async function getServerSideProps () {
//   const response = await fetch("http://webserver:80/api/post").then((res) => res.json());
//   return {
//     props: { response }
//   }
// }

export default IndexPage
