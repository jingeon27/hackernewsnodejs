import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import Link from "next/link";
const Home: NextPage = () => {
  const { status, data, isFetching } = GetPost();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {status === "loading" ? (
          <div>로딩 중 입니다.</div>
        ) : status === "error" ? (
          <div>에러입니다</div>
        ) : (
          <>
            {data.map(
              (user: {
                id: string;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                user:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <>
                  <Link href={`news/${user.id}`}>
                    <ul>
                      <li>{user.title}</li>
                      <li>{user.user}</li>
                    </ul>
                  </Link>
                </>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
const GetPost = () => {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get("https://api.hnpwa.com/v0/news/1.json");

    return data;
  });
};
