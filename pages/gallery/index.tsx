import React, { useContext } from "react";
import { galleryItems } from "@/objects/GalleryItems";
import Nav from "@/components/Nav";
import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/components/Footers/Footer";
import Layout from "../Layout";

const Index = () => {
  const { darkmode } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <>
      <Layout title="Photo gallery | फोटो ग्यालरी ">
        <Nav darkmode={darkmode} />
        <div className=" container mx-auto gap-3 m-1 sm:grid md:grid-cols-2 xl:grid-cols-3">
          {galleryItems?.map((items) => (
            <div
              onClick={() => router.push(`/gallery/${items?.id}`)}
              key={items?.id}
              className="image_gallery_container shadow-2xl cursor-pointer hover:scale-100"
            >
              {/* <img
              className="h-[300px] md:h-[400px] image_gallery  md:max-w-full rounded-lg"
              src={items?.img}
              alt=""
            /> */}
              <Image
                src={items?.img}
                priority
                alt=""
                width={400}
                className="image_gallery"
                height={400}
                style={{ height: "300px", width: "100%", borderRadius: "5px" }}
              />
            </div>
          ))}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
