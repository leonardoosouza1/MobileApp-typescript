import React, { useState } from 'react'
import { articleServices } from '../../../api/article'
import ArticleContext from '../context'
type TArticle = {
  id: string,
  title: string,
  description: string,
  body: string,
}
type Tarticles = Array<TArticle> | null

export type TArticleProvider = {
  articles: Tarticles | null,
  loading: boolean,
  createArticle: (title: string, description: string, body: string) => void,
  getArticles: () => void,
  updateArticle: (id: string, title: string, description: string, body: string) => void,
  deleteArticle: (id: string) => void,
}

const initialState = null

const ArticleProvider = ({ children }: { children: React.ReactNode }) => {
  const { createArticleService, getArticlesService, updateArticleService, deleteArticleService } = articleServices()
  const [ArticleData, setArticleData] = useState<Tarticles>(initialState)
  const [loading, setLoading] = useState(false)

  const createArticle = async (title: string, description: string, body: string) => {
    setLoading(true)

    createArticleService(title, description, body).then(() => getArticles)

    setLoading(false)
  }

  const deleteArticle = async (id: string) => {
    setLoading(true)

    deleteArticleService(id).then(() => getArticles)

    setLoading(false)
  }

  const getArticles = async () => {
    setLoading(true)

    const res:Tarticles = await getArticlesService()
    setArticleData(res)

    setLoading(false)
  }

  const updateArticle = async (id: string, title: string, description: string, body: string) => {
    setLoading(true)

    updateArticleService(id, title, description, body).then(() => {
      const insertNewArticle:Tarticles = ArticleData.map((article) => {
        if (article.id === id) {
          return {
            id,
            title,
            description,
            body
          }
        }
        return article
      })
      setArticleData(insertNewArticle)
    }).catch((error: Error) => console.error(error))

    setLoading(false)
  }

  const contextValue: TArticleProvider = { articles: ArticleData, loading, createArticle, getArticles, updateArticle, deleteArticle }

  return (
    <ArticleContext.Provider value={contextValue}>{children}</ArticleContext.Provider>
  )
}

export default ArticleProvider
