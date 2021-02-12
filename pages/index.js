import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return <>
    <Head>
        <meta charset="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>GCGS Página Principal</title>
        <meta name="description" content="Chatbots | I.A | Desenvolvimento | Produtividade" />
        <meta name="robots" content="" />
        <meta name="author" content="Guilherme Caldeira Godoy da Silva" />
        <meta name="keywords" content="Desenvolvimento, Chatbot, bot, javascript, typescript, node, telegram, WhatsApp, produtividade" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />

        <meta property="article:author" content="" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:description" content="" />
    </Head>
    <Header />
  </>;
}
