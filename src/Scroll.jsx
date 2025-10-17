import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Scroll() {
  const LIMIT = 5;
  const getData = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?_page=${pageParam}&_limit=${LIMIT}`
    );
    return {
      data: res.data,
      nextPage: res.data.length === LIMIT ? pageParam + 1 : undefined,
    };
  };
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [`albums-infiniti`],
      queryFn: getData,
      getNextPageParam: (lasPage) => lasPage.nextPage,
    });

  const allPosts = data?.pages?.flatMap((page) => page.data) || [];

  return (
    <div className="w-[60%] m-auto">
      {allPosts?.map((value) => {
        <div key={value.id}>{value.title}</div>;
      })}
    </div>
  );
}

export default Scroll;
