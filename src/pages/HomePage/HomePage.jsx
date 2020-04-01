import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { fetchArticles } from '../../slices/article'

import Banner from '../../components/Banner/Banner'
import MainView from '../../components/MainView/MainView'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <div className="home-page">
      <Banner />

      <div className="container page">
        <div className="row">
          <MainView />

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
