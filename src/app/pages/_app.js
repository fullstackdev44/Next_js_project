import '../assets/css/custom.css'; // Import global styles only once

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}