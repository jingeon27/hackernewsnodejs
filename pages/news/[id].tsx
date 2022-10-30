import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { GetStaticPaths } from "next";
import React, { useState } from "react";
import Link from "next/link";
const Porst = ({ params }: { params: { id: string } }) => {
  const { status, data } = GetContents(params.id);
  const [, setState] = useState({});
  const test = () => {
    axios
      .get("../api/test")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log("asdf");
    setState({});
  };
  return (
    <>
      {status === "loading" ? (
        <div>로딩중입니다.</div>
      ) : status === "error" ? (
        <div>에러입니다</div>
      ) : (
        <>
          <div>{data.title}</div>
          <Link href="/nice">이동하기^^</Link>
          <div
            style={{ height: "200px", width: "200px", backgroundColor: "red" }}
            onClick={() => test()}
          ></div>
        </>
      )}
    </>
  );
};
export default Porst;
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_API_NEWS_BASE_URL + "/news/1.json"
  );
  const paths: {
    params: {
      id: string;
    };
  }[] = data.map(
    (item: {
      id: string;
      title:
        | string
        | number
        | boolean
        | ReactElement<string | JSXElementConstructor<string>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      user:
        | string
        | number
        | boolean
        | ReactElement<string | JSXElementConstructor<string>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
    }) => {
      return {
        params: {
          id: item.id.toString(),
        },
      };
    }
  );
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      params,
    },
  };
};
const GetContents = (path: string) => {
  return useQuery(["contents", path], async () => {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_NEWS_BASE_URL + `/item/${path}.json`
    );
    return data;
  });
};
