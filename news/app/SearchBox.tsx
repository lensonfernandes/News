"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className="w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"> Search</button>
    </form>
  );
};

export default SearchBox;
