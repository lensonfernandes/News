import React from "react";

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <div className="bg-slate-100">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex-1">
        <div className="flex-1">
          <h2>{article.title}</h2>

          <section>
            <p>{article.description}</p>
          </section>

          <footer>
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Article;
