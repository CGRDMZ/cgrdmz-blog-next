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
  blocks,
  slug,
  leftAligned,
}: Props) {
  const postUrl = `/post/${encodeURIComponent(slug || "")}`;

  return (
    <article className="flex flex-col filter drop-shadow transform transition-all duration-75 ease-in-out sm:hover:-translate-y-1 sm:hover:shadow-xl sm:rounded-lg overflow-hidden flex-grow">
      <Link href={postUrl}>
        <a>
          <div className="w-full h-60 md:h-80 relative object-cover z-10 sm:rounded-t-lg">
            <Image
              src={imageUrl || ""}
              layout="fill"
              alt="blog post image"
              objectFit="cover"
              placeholder="empty"
              priority={true}
            />
          </div>
          <div className="bg-white flex flex-col justify-start p-6 max-w-3xl w-full flex-1">
            {categories && (
              <div className="inline-block">
                {categories.map((category) => (
                  <a
                    className="text-blue-700 text-sm font-bold uppercase pb-5 mr-2"
                    key={category}
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
            <span className="text-3xl font-bold hover:text-gray-700 pb-1">
              {title}
            </span>
            <p className="text-sm text-gray-300">
              By{" "}
              <span className="font-semibold text-gray-400 hover:text-gray-800">
                {author}
              </span>
              , Published on{" "}
              <span className="font-semibold text-gray-400 hover:text-gray-800">
                {new Date(date || "").toLocaleDateString()}
              </span>
            </p>
          </div>
        </a>
      </Link>
    </article>
  );
}
