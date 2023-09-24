import Image from 'next/image'
import { categories } from '@/constants';
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList';

export default async function Home() {

//fetch news data
// const news = await fetchNews(categories.join(','));

const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <NewsList
        // news={news} 
        />
    </main>
  )
}
