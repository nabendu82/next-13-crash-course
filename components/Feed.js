'use client';

import { useEffect, useState } from "react";
import PromptList from "./PromptList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const handleSearchChange = e => {}
  const handleTagClick = tag => {}
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type='text' placeholder='Search for tag/username' value={searchText} onChange={handleSearchChange} required className='search_input peer' />
      </form>
      <PromptList data={allPosts} handleTagClick={handleTagClick} />
      </section>
  )
}

export default Feed