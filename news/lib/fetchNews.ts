import { gql } from "graphql-request";

const fetchNews = async(
    category?: Category | string,
    keywords?:string,
    isDynamic?:boolean, 
) => {
    //GraphQL query
    const GET_Query = gql`
    query MyQuery  ($access_key : String!
        $categories: String!
        $keywords: String){ 
        myQuery(
            access_key: $access_key
            categories: $categories
            countries:"gb"
            sort:"published_desc"
            keywords: $keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            url
            title
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }`;

    //fetch function with next cach
const res = await  fetch(, {
    method: 'POST',
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? {revalidate: 0} : {revalidate: 20},
    headers:{
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
        query,
        variables:{
            access_key: process.env.MEDIASTACK_
        }
    })

})

    // sort function

    const news = sortNewsByImage();

    return res


}

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access"