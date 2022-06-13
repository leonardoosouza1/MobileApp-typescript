import { AxiosResponse } from 'axios'
import instance from '../instance'

export type TarticleResponse = {
  id: string
  title: string
  description: string
  body: string
  thumbnail: string
  'create_at': string
}

export interface IArticleServices {
  getArticlesService: () => Promise<Array<TarticleResponse>>
  createArticleService: (title: string, description: string, body: string) => Promise<TarticleResponse>
  updateArticleService: (id:string, title: string, description: string, body: string) => Promise<TarticleResponse>
  deleteArticleService: (id: string) => Promise<AxiosResponse>
}

const articleServices = ():IArticleServices => {
  const getArticlesService = async () => await instance.get('/article/all')

  const createArticleService = async (
    title:string,
    description:string,
    body:string
  ) => {
    const res:TarticleResponse = await instance.post('/article/create', {
      title,
      description,
      body
    })
    return res
  }

  const updateArticleService = async (id:string, title:string, description:string, body: string) => {
    const res: TarticleResponse = await instance.put(`/article/update/${id}`, {
      title,
      description,
      body
    })

    return res
  }

  const deleteArticleService = async (id: string) => instance.delete(`/article/delete/${id}`)

  return {
    getArticlesService,
    createArticleService,
    updateArticleService,
    deleteArticleService
  }
}

export { articleServices }
