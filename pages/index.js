import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Naruto</title>
        <meta
          name='description'
          content='Gera uma mesnssagem aleatória do naruto '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Naruto API!</a>
        </h1>
        <p>Mensagem aleatória Naruto</p>
        <p>
          <a
            href='https://api-generate-message-random-naruto.vercel.app/api'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.gratuita}
          >
            https://api-generate-message-random-naruto.vercel.app/api
          </a>
        </p>
        <p>
          Implementado apenas o metodo GET para consumo referente a aula{' '}
          <span className={styles.gratuita}>Gratuita</span> da DIO.
        </p>
        <p className={styles.site_dio}>
          <a
            href='https://dio.me/sign-up?ref=NIO93DR72W'
            target='_blank'
            rel='noopener noreferrer'
            title='Acesse agora uma grande quantidade de cursos e Bootcamps gratuitos'
          >
            https://www.dio.me
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <span>
          Projeto GitHub{' '}
          <p className={styles.github}>
            <a
              href='https://github.com/speedsul/api-generate-message-random-naruto'
              target='_blank'
              rel='noopener noreferrer'
            >
              Acesse esse projeto no github
            </a>
          </p>
        </span>
        <a
          href='https://github.com/speedsul/api-generate-message-random-naruto'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <span className={styles.logo}>SPEEDSUL</span>
        </a>
      </footer>
    </div>
  )
}
