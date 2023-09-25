"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5 pt-20"
    >
      <input
        type="text"
        className="w-full h-14 rounded-lg placeholder-gray-500 text-gray-500 outline-none flex-1 dark:text-orange-400 m-3 p-3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search News"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-orange-400 text-white rounded-sm p-3 disabled:bg-gray-500 disabled:cursor-not-allowed"
        style={{ minWidth: "100px" }}
      >
        {" "}
        Search
      </button>
    </form>
  );
};

export default SearchBox;
