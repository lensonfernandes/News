import Image from "next/image";
import { categories } from "@/constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "@/response.json";

export default async function Home() {
  const news: NewsResponse =
    //response ||
    await fetchNews(categories.join(","));

  return (
    <main className="flex min-h-screen flex-col md:flex-row flex-wrap items-center justify-between p-2 m-2">
      <NewsList news={news} />
    </main>
  );
}
