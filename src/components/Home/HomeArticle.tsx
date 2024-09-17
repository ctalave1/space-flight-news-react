import { Link } from "react-router-dom";
import { type Article } from "../../types/article";

type Props = {
  article: Article
};

export const HomeArticle = ({ article }: Props) => (
  <div className="flex flex-col gap-4 py-4 border-b font-mono">
    <Link to={`/article/${article.id}`} preventScrollReset={true}>
      <img
        className="aspect-video object-cover"
        src={article.image_url}
        alt={article.title}
        width="1920"
        height="1080"
        loading="lazy"
      />
      <h2 className="text-2xl">{article.title}</h2>
      <p className="text-sm hidden lg:block">{article.summary}</p>
    </Link>
    <p className="text-sm text-gray-500">
      {new Date(article.published_at).toLocaleString()}
    </p>
  </div>
);