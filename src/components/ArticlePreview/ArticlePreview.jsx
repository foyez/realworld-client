import React from 'react'
import { Link } from 'react-router-dom'

const ArticlePreview = ({ article }) => (
  <div className="article-preview">
    <div className="article-meta">
      <Link to="">
        <img src={article.author.image} alt="author pic" />
      </Link>

      <div className="info">
        <Link to="" className="author">
          {article.author.username}
        </Link>
        <span className="date">{new Date(article.createdAt).toDateString()}</span>
      </div>

      <div className="pull-xs-right">
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
    </div>

    <Link to={`article/${article.slug}`} className="preview-link">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <span>Read more...</span>
      <ul className="tag-list">
        {article.tagList.map(tag => {
          return (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          )
        })}
      </ul>
    </Link>
  </div>
)

export default ArticlePreview
