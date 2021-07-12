import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import cls from "classnames";

interface Props {
  imageUrl: string;
  title: string;
  categories: Array<string>;
  author: string;
  date: Date;
  blocks: Array<Object> | Object | string;
  slug: string;
  leftAligned: boolean;
}

export default function Post({
  imageUrl,
  title,
  categories,
  author,
  date,
  blocks,
  slug,
  leftAligned,
}: Props) {
  const postUrl = `/post/${encodeURIComponent(slug)}`;

  return (
    <article className="flex flex-col max-w-xl filter drop-shadow transform transition-all duration-75 ease-in-out sm:hover:-translate-y-1 sm:hover:shadow-xl rounded-lg overflow-hidden flex-grow">

      <div className="w-full h-60 md:h-80 relative object-cover z-10 sm:rounded-t-lg">
        <Image
          src={imageUrl}
          layout="fill"
          alt="blog post image"
          objectFit="cover"
          placeholder="empty"
          priority={true}
        />
      </div>
      <div className="bg-white flex flex-col justify-start p-6 max-w-3xl w-full flex-1">
        <div className="inline-block">
          {categories.map((category) => (
            <a
              href="#"
              className="text-blue-700 text-sm font-bold uppercase pb-5 mr-2"
              key={category}
            >
              {category}
            </a>
          ))}
        </div>
        <Link href={postUrl}>
          <a className="text-3xl font-bold hover:text-gray-700 pb-1">{title}</a>
        </Link>
        <p className="text-sm pb-5 text-gray-300">
          By{" "}
          <Link href={"#"}>
            <a className="font-semibold text-gray-400 hover:text-gray-800">
              {author}
            </a>
          </Link>
          , Published on{" "}
          <span className="font-semibold text-gray-400">
            {new Date(date).toLocaleDateString()}
          </span>
        </p>
        <Link href={postUrl}>
          <a className="pb-6 w-full lg:max-w-md overflow-ellipsis">
            <BlockContent blocks={blocks} />
            ...
          </a>
        </Link>
        <Link href={postUrl}>
          <a className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </Link>
      </div>
    </article>
  );
}
