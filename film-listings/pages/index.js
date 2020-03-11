import Head from 'next/head'
import BaseLayout from '../components/layouts/BaseLayout';


const Home = () => (
  <BaseLayout title="Film Listings">
  <div className="container">
    <Head>
      <title>Film Listings App - Node & React (next.js)</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Film selector
      </h1>

      <p className="description">
        <ul>
          <li><a href='/planets/tatooine'>Tatooine</a></li>
          <li><a href='/planets/alderaan'>Alderaan</a></li>
          <li><a href='/planets/yavin'>Yavin</a></li>
        </ul>
      </p>

    </main>

  </div>
  </BaseLayout>
)

export default Home
