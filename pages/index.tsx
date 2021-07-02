import Head from "next/head";
import Image from "next/image";
import Post from "../components/Post";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 flex justify-center">
      <div className="w-full flex flex-col items-center sm:w-3/4">
        <h2 className="w-full flex flex-col justify-start items-start font-bold underline text-2xl px-3 pt-3">Blog Posts</h2>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
