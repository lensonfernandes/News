import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 flex flex-col md:flex rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out mb-4  md:w-1/4">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source}</p>
            <p>
              {/* <LiveTimestamp time= */}
              {article.published_at}
              {/* //  /> */}
            </p>
          </footer>
        </div>

        <ReadMoreButton article={article} />
      </div>
    </div>
  );
};

export default Article;
