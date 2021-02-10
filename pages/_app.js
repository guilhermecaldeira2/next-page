import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
