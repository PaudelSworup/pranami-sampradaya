import { Inter } from "next/font/google";
import Layout from "./Layout";
import Nav from "@/components/Nav";
import { useContext } from "react";
import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import Footer from "@/components/Footers/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <Layout title="Pranami Sampradaya">
      <Nav darkmode={darkmode} />
      <Banner />
      <Intro darkmode={darkmode} />
      <Footer />
    </Layout>
  );
}
