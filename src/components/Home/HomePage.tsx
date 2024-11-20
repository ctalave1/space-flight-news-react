import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { useAtom } from 'jotai';
import { useMemo } from 'react';

import type { Article } from '../../types/article';
import { HomeArticle } from './HomeArticle';
import { queryAtom } from '../../atoms';
import { useFetch } from '../../hooks/useFetch';

export const HomePage = () => {
  const [query] = useAtom(queryAtom);

  const fetchUrl = useMemo(() => {
    const url = new URL('https://api.spaceflightnewsapi.net/v4/articles/');
    url.searchParams.append('ordering', 'publishedAt:DESC');
    url.searchParams.append('limit', '18');

    if (query.length > 0) {
      url.searchParams.append('search', query);
    }

    return url;

  }, [query]);

  const { data: articles, isLoading } = useFetch<Article[]>(fetchUrl);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <RocketLaunchIcon className="mx-auto my-12 h-12 w-12 text-gray-400 animate-bounce" />
      ) : (
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid cols-3">
          {Array.isArray(articles) &&
            articles.length > 0 &&
            articles.map(article =>(
              <HomeArticle key={`kArticle-${article.id}`} article={article} />
            ))}
        </div>
      )}
    </div>
  );
};