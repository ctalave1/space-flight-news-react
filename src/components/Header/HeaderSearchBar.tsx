import { type ChangeEvent, useCallback } from 'react';
import _debounce from 'lodash/debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useAtom } from 'jotai';

import { queryAtom } from '../../atoms';

export const HeaderSearchBar = () => {
  const [_, setQuery] = useAtom(queryAtom);

  const handleChange = useCallback(
    _debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, 500),
    []
  );

  return (
    <div className="flex grow">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
        </div>
        <input
          className="block p-2.5 pl-10 w-full z-20 text-lg text-gray-900 border=none focus-visable:outline-none"
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};