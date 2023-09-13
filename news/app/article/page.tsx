

import React from 'react'

type Props = {
    searchParams?: Article;
}

const ArticlePage = ({searchParams}: Props) => {
  return (
    <div>
        <article>
            <section>


                <div>
                    <h2>{article.author}</h2>
                    <h2>Source: {article.source}</h2>
                </div>
            </section>
        </article>
    </div>
  )
}

export default ArticlePage