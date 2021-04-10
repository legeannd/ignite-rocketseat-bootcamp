import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main>
        <div>
          <a>
            <time>09 de abril de 2021</time>
            <strong>Title</strong>
            <p>Content</p>
          </a>
        </div>
      </main>
    </>
  );
}