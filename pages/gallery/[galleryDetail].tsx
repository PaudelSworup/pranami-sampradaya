import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import { galleryItems } from "@/objects/GalleryItems";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useContext } from "react";
import Layout from "../Layout";
import Nav from "@/components/Nav";
// import Image from "next/image";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footers/Footer";

const Description = ({
  galleryData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <>
      <Layout title={galleryData?.title}>
        <Nav darkmode={darkmode} />
        <div className="grid gap-4">
          <div className="h-[500px] lg:h-[720px]">
            <Image
              priority
              src={galleryData?.img}
              alt=""
              width={800}
              className="image_gallery"
              height={700}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <Marquee className="mt-1">
            {galleryData?.images?.map((img: any, index: any) => {
              return (
                <div
                  className="max-w-full p-1 py-5 px-2 cursor-pointer transition duration-[420ms] ease-in transform sm:hover:scale-100 hover:z-50 "
                  key={index}
                >
                  <Image
                    src={img?.img}
                    alt=""
                    width={700}
                    className="image_gallery "
                    height={700}
                    style={{
                      height: "290px",
                      width: "300px",
                      margin: "2px",
                      // maxWidth: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>

        <div className="mt-3">
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default Description;

export async function getStaticPaths() {
  const path = galleryItems?.map((gallery) => {
    return {
      params: {
        galleryDetail: `${gallery?.id}`,
      },
    };
  });
  return {
    paths: path,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const ID = parseInt(params?.galleryDetail as string);

  const galleryData = galleryItems?.find((item) => item?.id === ID);
  return {
    props: {
      galleryData,
    },
  };
};
