import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

interface Props {
  imageUrl?: string;
  title?: string;
  categories?: Array<string>;
  author?: string;
  date?: Date;
  blocks?: Array<Object> | Object | string;
  slug?: string;
  leftAligned?: boolean;
}

export default function Post({
  imageUrl,
  title,
  categories,
  author,
  date,
  slug,
}: Props) {
  const postUrl = `/post/${encodeURIComponent(slug || "")}`;

  return (
    <article className="flex flex-col px-1 group ">
      <Link href={postUrl}>
        <a>
          <div className="w-full h-60 md:h-80 relative object-cover z-8 sm:rounded-lg overflow-hidden">
            <Image
              src={imageUrl || ""}
              layout="fill"
              alt="blog post image"
              objectFit="cover"
              placeholder="empty"
              priority={true}
              className="filter transform transition-all duration-100 ease-in-out group-hover:brightness-50 group-hover:grayscale-0"
            />
            <div className="absolute z-10 bottom-0 m-5 p-3 bg-white bg-opacity-90 rounded-lg flex flex-col transform transition-all duration-100 ease-in-out md:group-hover:scale-101">
              <span className="line-clamp-2 text-xl sm:text-2xl md:text-3xl font-bold hover:text-gray-700 pb-1">
                {title}
              </span>
              <p className="text-sm text-gray-400">
                By{" "}
                <span className="font-semibold text-gray-600 hover:text-gray-800">
                  {author}
                </span>
                , Published on{" "}
                <span className="font-semibold text-gray-600 hover:text-gray-800">
                  {new Date(date || "").toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
