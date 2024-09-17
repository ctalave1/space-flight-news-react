import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

import { type Article as ArticleT } from '../../types/article';
import { Article } from './Article';
import { useFetch } from '../../hooks/useFetch';

type ArticlePageUrlParams = {
  id: string
};

export const ArticlePage = () => {
  const { id } = useParams<ArticlePageUrlParams>();

  const fetchUrl = useMemo(() => {
    return new URL(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
  }, [id]);

  const { data: article, isLoading } = useFetch<ArticleT>(fetchUrl);

  return (
    <div className="container mx-auto">
      {isLoading || !article ? (
        <RocketLaunchIcon className="mx-auto my-12 h-12 w-12 text-gray=400 animate-bounce" />
      ) : (
        <Article article={article} />
      )}
    </div>
  );
};