import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dalle Vault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Dalle Vault" />

      </main>
      <h2>Fisheye Harambe doing a kickflip</h2>
      <div style={{ position: "relative", width: "420px", height: '500px', margin: '30px 0 60px' }} >
        <Image
          src="/images/fisheye-harambe-doing-a-kickflip.jpg" // Route of the image file
          layout="fill"
          objectFit="contain"

          alt="Fisheye harambe doing a kickflip"
        />
      </div>
      <Footer />
    </div>
  )
}
