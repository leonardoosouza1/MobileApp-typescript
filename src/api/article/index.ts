import instance from '../instance'

type TarticleResponse = {
    id: string
    title: string
    description: string
    body: string
    thumbnail: string
    'create_at': string
}

interface ICreateArticle {
    id?: string
    title: string
    description: string
    body: string
}

const articleService = () => {
  const getArticles = async () => {
    const res:[TarticleResponse] = await instance.get('/article/all')
    return res
  }

  const createArticle = async ({
    title,
    description,
    body
  }: ICreateArticle) => {
    const res:TarticleResponse = await instance.post('/article/create', {
      title,
      description,
      body
    })
    return res
  }

  const updateArticle = async ({ id, title, description, body }: ICreateArticle) => {
    const res:TarticleResponse = await instance.put(`/article/update/${id}`, {
      title,
      description,
      body
    })

    return res
  }

  const deleteArticle = async (id: string) => instance.delete(`/article/delete/${id}`)

  return {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle
  }
}

export default articleService
