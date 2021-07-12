import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { getPosts, IPost, pages } from "../model/postModel";

interface Props {
  posts: Array<IPost>;
  pageArray: Array<string>;
  currentPage: number
}

export default function Home({ posts, pageArray, currentPage }: Props) {
  return <PostList currentPage={currentPage} posts={posts} pageArray={pageArray} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();
  const pageArray = await pages();
  return {
    props: {
      posts,
      pageArray,
      "currentPage": 1
    },
    revalidate: +process.env.VALIDATE_TIME! || 120
  };
};
