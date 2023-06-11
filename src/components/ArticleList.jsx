import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const ArticleList = ({ article, index }) => {
  return (
    <Link
      to={article?.web_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-4 bg-[#e0e2db] rounded-md shadow-md hover:bg-[#cbccc7] hover:shadow-lg transition-all duration-300 min-h-[140px]"
      data-aos="fade-up"
      data-aos-duration={100 * index}
    >
      <h3 className="font-bold text-xl mb-1 group-hover:text-[#455a56]">
        {article?.headline.main}
      </h3>
      <div className="flex flex-col sm:flex-row sm:gap-4 sm:items-center text-sm text-[#5f7470] mb-2">
        <h5 className=" sm:border-r sm:border-[#5f7470] sm:pr-4">
          {article?.byline.original ? article?.byline.original : 'Anonymous'}
        </h5>
        <div className="flex items-center gap-2">
          <AiOutlineCalendar />{' '}
          <span>
            {article?.pub_date
              ? format(new Date(article?.pub_date), 'MMMM dd, yyyy')
              : '-'}
          </span>
        </div>
      </div>
      <p className="line-clamp-2 group-hover:opacity-70">
        {article?.lead_paragraph}
      </p>
    </Link>
  );
};

export default ArticleList;
