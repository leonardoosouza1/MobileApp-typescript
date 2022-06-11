import { createContext } from 'react'

import { TArticleProvider } from '../provider'

// @ts-expect-error defauValue is not required
const ArticleContext = createContext<TArticleProvider>()
export default ArticleContext
