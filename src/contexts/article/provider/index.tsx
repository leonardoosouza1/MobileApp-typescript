/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
// import { createArticleService, getArticlesService, updateArticleService, deleteArticleService } from 'api/article'

import ArticleContext from '../context'

type Tarticles = Array<{
  id: string
  title: string
  description: string
  body: string
  }>
export type TArticleProvider = {
  articles: Array<Tarticles> | null,
  loading: boolean,
  createArticle: (title: string, description: string, body: string) => void,
  getArticles: () => void,
  updateArticle: (id: string, title: string, description: string, body: string) => void,
  deleteArticle: (id: string) => void,
}

const initialState = null

const ArticleProvider = ({ children }: {children: React.ReactNode}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [ArticleData, setArticleData] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const createArticle = async (title: string, description: string, body: string) => {
    setLoading(true)

    // createArticleService(title, description, body).then(() => getArticles)

    setLoading(false)
  }

  const deleteArticle = async (id: string) => {
    setLoading(true)

    // deleteArticleService(id).then(() => getArticles)

    setLoading(false)
  }

  const getArticles = async () => {
    setLoading(true)

    // const { articles } = await getArticlesService()
    // setArticleData(articles)

    setLoading(false)
  }

  const updateArticle = async (id: string, title: string, description: string, body: string) => {
    setLoading(true)

    // updateArticleService(id, title, description, body).then(() => {
    //   const insertNewArticle = ArticleData.map((article: {id: string}) => {
    //     if (article.id === id) {
    //       return {
    //         ...article,
    //         title,
    //         description,
    //         body
    //       }
    //     }
    //     return article
    //   })
    //   setArticleData(insertNewArticle)
    // }).catch((error: Error) => console.error(error))

    setLoading(false)
  }

  const contextValue: TArticleProvider = { articles: ArticleData, loading, createArticle, getArticles, updateArticle, deleteArticle }

  return (
    <ArticleContext.Provider value={contextValue}>{children}</ArticleContext.Provider>
  )
}

export default ArticleProvider
