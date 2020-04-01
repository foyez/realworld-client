import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectArticles } from '../../slices/article'

import ArticleList from '../ArticleList/ArticleList'

const MainView = () => {
  const { articles } = useSelector(selectArticles)
  console.log(articles)

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <Link to="" className="nav-link active">
              Global Feed
            </Link>
          </li>
        </ul>
      </div>

      <ArticleList articles={articles} />
    </div>
  )
}

export default MainView
