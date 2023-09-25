"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;

    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white p-2 rounded-md"
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
