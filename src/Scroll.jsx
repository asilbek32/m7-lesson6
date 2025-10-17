import { useInfiniteQuery } from "@tanstack/react-query";
import { Alert, Button } from "antd";
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
        return (
          <div key={value.id} className="mt-[10px]">
            <Alert
              message={value.title + " " + value.id}
              className="!h-[50px]"
            />
          </div>
        );
      })}

      <Button className="!mt-3" onClick={fetchNextPage}>
        {isFetchingNextPage || isLoading ? "Loading.." : "Show more"}
      </Button>
    </div>
  );
}

export default Scroll;
