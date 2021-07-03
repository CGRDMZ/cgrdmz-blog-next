import Head from "next/head";
import Image from "next/image";
import Post from "../components/Post";

export default function Home() {
  return (
      <div className="container xl:max-w-6xl mx-auto px-2">
        <h2 className="w-full font-semibold underline text-2xl mt-4 mb-1 text-gray-500">Blog Posts</h2>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
  );
}
