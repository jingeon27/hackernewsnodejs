import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { GetStaticPaths } from "next";
import Link from "next/link";
const Porst = ({ params }: { params: { id: string } }) => {
  const { status, data } = GetContents(params.id);
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
        </>
      )}
    </>
  );
};
export default Porst;
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get("https://api.hnpwa.com/v0/news/1.json");
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
  console.log(paths);
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
  console.log(path);
  return useQuery(["contents", path], async () => {
    const { data } = await axios.get(
      `https://api.hnpwa.com/v0/item/${path}.json`
    );
    return data;
  });
};
