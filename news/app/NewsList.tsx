import React from 'react'
import Article from './Article'


type Props = {
    news: NewsResponse
}

const NewsList = () => {
  return (
    <div className='grid '>
        news.data.map(article => (
            {/* <Article key={Article.title} article={article} /> */}
        ))
    </div>
  )
}

export default NewsList