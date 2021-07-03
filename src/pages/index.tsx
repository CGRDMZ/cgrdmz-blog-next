import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Post from "../components/Post";
import { getPosts } from "../model/postModel"

export default function Home({posts}) {
  return (
      <div className="container xl:max-w-6xl mx-auto px-2">
        <h2 className="w-full font-semibold underline text-2xl mt-4 mb-1 text-gray-500">Blog Posts</h2>
        {posts.map((post) => {
          return <Post title={post.title} imageUrl={post.imageUrl} categories={post.categories} author={post.author.name} date={post._createdAt}/>;
        })}
      </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();
  console.log(posts);
  return {
    props: {
      posts
    }
  }
}
