import React from 'react'

type Props = {
    searchParams?: {term: string};
}

const SearchPage = async ({searchParams}: Props) => {

    const news: NewsResponse = await fetchNews(
        "general",
        searchParams?.term,
        true
    )
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage