import "@/styles/globals.css";
import Footer from "@/Components/footer";
import Navbar from "@/Components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
