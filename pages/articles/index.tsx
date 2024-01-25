import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Article from "@/components/Article";
import Nav from "@/components/Nav";
import { article } from "@/objects/articleItems";
import Layout from "../Layout";
import React, { useContext, useState } from "react";
import Pagination from "@/components/Pagination";

const Index = () => {
  const { darkmode } = useContext(ThemeContext);
  const [articlePost, setArticlePost] = useState<
    {
      id: number;
      title: string;
      description: string;
      fullDescription?: string;
    }[]
  >(article);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //get current post
  const indexOfLastPost = currentPage * 4;
  const indexOfFirstPost = indexOfLastPost - 4;
  const currentPost = articlePost.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pn: number) => setCurrentPage(pn);

  return (
    <>
      <Layout title="article | आर्टिकल ">
        <Nav darkmode={darkmode} />
        <div className="sm:grid md:grid-cols-2 gap-10 lg:mx-[10%]">
          {currentPost?.map((article) => (
            <Article key={article?.id} articleData={article} />
          ))}
        </div>
        <Pagination
          totalPost={articlePost?.length}
          postPerPage={4}
          paginate={paginate}
        />
      </Layout>
    </>
  );
};

export default Index;
