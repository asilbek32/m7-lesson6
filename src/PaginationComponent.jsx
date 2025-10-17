import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Alert, message, Pagination, Skeleton } from "antd";

function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);

  const getData = async (page, limit) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`
    );
    return {
      data: res.data,
      total: parseInt(res.headers["x-total-count"]),
    };
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: [`albums-${currentPage}-${currentLimit}`],
    queryFn: () => getData(currentPage, currentLimit),
  });

  const skeletOn = () => {
    return Array.from({ length: 10 }).map((_, ind) => {
      <Skeleton.Input className="!w-full !h-[45px] " active key={ind} />;
    });
  };

  console.log(data);

  const handleChange = (page, pageSize) => {
    setCurrentPage(page);
    setCurrentLimit(pageSize);
  };

  return (
    <div className="w-[60%] m-auto pt-10">
      {isLoading || isError
        ? skeletOn()
        : data?.data.map((value) => {
            <Alert
              key={value.id}
              message={value.title + value.id}
              className="!mt-5"
            />;
          })}

      <Pagination current={currentPage} />
    </div>
  );
}

export default PaginationComponent;
