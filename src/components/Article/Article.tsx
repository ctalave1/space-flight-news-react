import { type Article as ArticleT } from "../../types/article"

export const Article = ({ article }: { article: ArticleT }) => {
  return (
    <div className="px-4 lg:px-0">
      <img
        className="mt-4 w-full aspect-video object-cover"
        src={article.image_url}
        alt={article.title}
        width="1920"
        height="1080"
        loading="lazy"
      />
      <p className="mt-2 text-sm text-gray-500">
        {new Date(article.published_at).toLocaleString()}
      </p>
      <h2 className="mt-4 text-4xl">{article.title}</h2>
      <p className="mt-4 mb-4 text-base">{article.summary}</p>
    </div>
  );
};