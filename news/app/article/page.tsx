import React from "react";
import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};

const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article: Article = searchParams;
  return (
    <div>
      <article className="h-screen flex justify-center items-start ">
        <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10 mt-20">
          {article.image && (
            <img
              className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
              src={article.image}
              alt={article.title}
            />
          )}
          <div className="px-10">
            <h1 className="headerTitle px-0 no-underline pb-2">
              {article.title}
            </h1>

            <div className="flex divide-x-2 space-x-4">
              <h2 className="font-bold">{article.author || "Unknown"}</h2>
              <h2 className="font-bold pl-4">Source: {article.source}</h2>
              <p className="pl-4">
                {/* <LiveTimestamp time= */}
                {article.published_at}
                {/* // /> */}
              </p>
            </div>
            <p className="mt-4">{article.description}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default ArticlePage;
