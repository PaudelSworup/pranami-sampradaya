import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Card from "@/components/Card";
import Nav from "@/components/Nav";
import { items } from "@/objects/items";
import React, { useContext } from "react";
import Layout from "../Layout";
import Footer from "@/components/Footers/Footer";

const Index = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <Layout title="videos | भिडियो ">
      <Nav darkmode={darkmode} />
      <div className="p-4 cursor-pointer mx-20 sm:px-10  sm:grid md:grid-cols-2 lg:flex justify-center items-center gap-4 ">
        {items.map((data) => (
          <Card
            key={data?.id}
            id={data?.id}
            source={data?.media}
            imgSrc={data?.src}
            videoTitle={data?.videoTitle}
          />
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default Index;
