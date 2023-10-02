import React from 'react'
import Article from './Article'


type Props = {
    news: NewsResponse
}

const NewsList = ({news}: Props) => {
  return (
    <div className=' mb-2  flex flex-col flex-wrap md:flex-row gap-6 justify-center '>
       { news.data.map(article => (
            <Article key={article.title} article={article} />
        ))}
    </div>
  )
}

export default NewsList