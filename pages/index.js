import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dalle Vault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Dalle Vault" />
        <p className="description">
          Cool Dalle Generations
        </p>
      </main>

      <Footer />
    </div>
  )
}
