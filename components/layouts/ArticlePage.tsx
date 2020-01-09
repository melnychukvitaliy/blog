
import { ReactChild } from 'react';

import { getFormattedDate } from '../../utils/date'
import { Article } from '../../content/articles'

interface IArticlePageProps {
  children: ReactChild;
}

export default ({ children, title, date }: IArticlePageProps & Article) => (
  <div>
    <h1>{title}</h1>
    <p>{getFormattedDate(date)}</p>
    <div className="content">
      {children}
    </div>
    <style jsx>{`
      .content {
        font-family: 'Montserrat';
        padding-top: 5px;
        line-height: 24px;
        font-size: 16px;
        text-align: justify;
        padding: 10px;
        text-indent: 20px;
      }
    `}
    </style>
  </div>
)
