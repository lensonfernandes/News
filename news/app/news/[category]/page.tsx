

import React from 'react'


type Props = {
    params: {category: Category}
}

const NewsCategory = ({params: {category}} : Props) => {

    const news: newsResponse = await fetchNews(category);
    
  return (
    <div>NewsCategory</div>
  )
}

export default NewsCategory