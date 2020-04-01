import React from 'react'
import ArticlePreview from '../ArticlePreview/ArticlePreview'

const ArticleList = ({ articles }) => {
  if (!articles) {
    return <div className="article-preview">Loading...</div>
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>
  }

  return (
    <div>
      {articles.map(article => {
        return <ArticlePreview article={article} />
      })}
    </div>
  )
}

export default ArticleList
