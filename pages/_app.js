import '../styles/global.css'; // Cannot import global CSS anywhere else

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}