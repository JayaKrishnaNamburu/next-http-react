import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const CardWithCSSModules = dynamic(() => 
  import('https://jscdn.teleporthq.io/product-card_6b939cf1-0df0-4bc5-997e-93c149109fc4.js'), 
{ ssr: false })

const CardWithStyledComponentsNoSSR = dynamic(() => 
  import('https://jscdn.teleporthq.io/product-card_0fc4ab9e-f909-49ac-a96d-daf4947fc332.js'), 
{ ssr: false })

import CardWithStyledComponents from 'https://jscdn.teleporthq.io/product-card_0fc4ab9e-f909-49ac-a96d-daf4947fc332.js'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Demo Card with CssModules and SSR false</h2>
        <CardWithCSSModules />
      </div>
      <div>
        <h2>Demo Card with Styled Components and no SSR</h2>
        <CardWithStyledComponentsNoSSR />
      </div>
      <div>
        <h2>Demo Card with Styled Components and SSR</h2>
        <CardWithStyledComponents />
      </div>
    </div>
  )
}
