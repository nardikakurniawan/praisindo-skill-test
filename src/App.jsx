import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

import useDebounce from './hooks/useDebounce';
import { useGetArticlesQuery } from './redux/services/api';
import { ArticleList, Error, Loading, NoResultFound } from './components';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data, isLoading, error } = useGetArticlesQuery(debouncedSearchValue);
  const articles = data?.response?.docs;

  const renderContent = () => {
    if (error) {
      return <Error />;
    }

    if (isLoading) {
      return <Loading />;
    }

    if (articles.length === 0) {
      return <NoResultFound />;
    }

    return (
      <div className="grid gap-4">
        {articles.map((article, index) => (
          <ArticleList key={article?._id} article={article} index={index} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="App max-w-6xl mx-auto px-6 lg:px-0 py-8">
        <div className="flex justify-center mb-10">
          <label
            className="w-full sm:w-[60%] lg:w-[40%] relative"
            data-aos="zoom-in"
          >
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="p-4 pr-10 rounded-md outline-none w-full bg-[#d2d4c8] shadow-sm focus:bg-[#e0e2db] focus:shadow-lg transition-all duration-300"
              placeholder="Search Articles"
            />
            <ImSearch className="absolute top-5 right-3" />
          </label>
        </div>

        {renderContent()}
      </div>
    </>
  );
}

export default App;
