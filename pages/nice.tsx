import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NextPage } from "next";
const Nice: NextPage = () => {
  const { status, data, isFetching } = GetRequest();
  return (
    <>
      {status === "loading" ? (
        <div>로딩 중 입니다</div>
      ) : status === "error" ? (
        <div>에러입니다</div>
      ) : (
        <div>{data.name}</div>
      )}
    </>
  );
};
export default Nice;
const GetRequest = () => {
  return useQuery(["get"], async () => {
    const { data } = await axios.get("/api/hello");
    return data;
  });
};
