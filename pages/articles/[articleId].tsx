import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Nav from "@/components/Nav";
import { article } from "@/objects/articleItems";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useContext } from "react";
import Layout from "../Layout";

const ArticleDescription = ({
  articleData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { darkmode } = useContext(ThemeContext);

  const dark = darkmode ? "text-white" : "text-black";
  return (
    <>
      <Layout title={articleData?.title}>
        <Nav darkmode={darkmode} />
        <div className="flex flex-col justify-center items-start xl:items-center p-8 xl:mx-60 ">
          <h2
            className={`font-serif text-2xl sm:text-4xl tracking-wider  font-bold ${dark}`}
          >
            {articleData?.title}
          </h2>

          <h2 className={`font-serif text-xl md:text-3xl ${dark}`}>
            श्री राजी श्यामाजी प्रणाम,
          </h2>

          <p
            className={`font-serif text-xl md:text-2xl  text-justify tracking widest  ${dark}`}
            dangerouslySetInnerHTML={{ __html: articleData?.fullDescription }}
          />
        </div>
      </Layout>
    </>
  );
};

export default ArticleDescription;

export async function getStaticPaths() {
  const paths = article?.map((article) => {
    return {
      params: {
        articleId: `${article?.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const id = parseInt(params?.articleId as string);

  console.log("id", id);

  const articleData = article?.find((data) => data?.id === id);

  return {
    props: {
      articleData,
    },
  };
};
