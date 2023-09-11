import Head from 'next/head';

function MetaTags() {
  return (
    <Head>
      <title>BTCDuels - Decentralized Betting Platform</title>
      <meta
        name="description"
        content="BTCDuels is the safest and most exciting betting platform in crypto. Predict prices in real-time to win instant rewards."
        key="description"
      />
      <meta
        name="keywords"
        content="Crypto, Web3, Betting, Gaming, Decentralized Gaming, Decentralized Betting, Price Predicition, Price Oracle"
      />
      <link rel="icon" href="/images/logos/zk-red.svg" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line */}
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
  );
}

export default MetaTags;
