import { getPostBySlug, getPostSlugs } from "../../model/postModel";
import Image from "next/image";
import PostDetailItem from "../../components/PostDetailItem";
import Category from "../../components/Category";
import BlockContent from "@sanity/block-content-to-react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IPost } from "../../model/postModel";
import { useRouter } from "next/router";
import serializers from "../../sanity/serializers";

interface Props {
  post: IPost;
}

export default function PostDetail({ post }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading</div>;
  }

  return (
    <div className="container xl:max-w-6xl mx-auto px-3">
      <div className="mt-5">
        <Image src={post.imageUrl} width="1280" height="720" alt="post image" />
      </div>
      <div className=" py-3">
        <div className="font-bold text-4xl py-1">{post.title}</div>
        <div className="py-1">
          <div className="text-gray-800 inline-flex flex-wrap">
            <PostDetailItem infoKey="Author" value={post.author.name} />
            <PostDetailItem
              infoKey="Published At"
              value={new Date(post._createdAt).toLocaleDateString()}
            />
          </div>
        </div>
        <div className="inline-flex flex-wrap">
          {post.categories.map((val) => (
            <Category key={val} name={val} />
          ))}
        </div>
      </div>
      <div className="pt-2 pb-10 leading-8 text-lg">
        <BlockContent className="space-y-5 text-justify" blocks={post.body} serializers={serializers} />
      </div>
    </div>
  );
}

interface ContextParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  let { slug } = context.params as ContextParams;

  let post: IPost = await getPostBySlug(slug);

  if (Object.keys(post).length == 0) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: +process.env.VALIDATE_TIME! || 120,
  };
};

interface IPath {
  params: ISlugObj;
}

interface ISlugObj {
  slug: string;
}

export async function getStaticPaths() {
  let slugs = await getPostSlugs();
  const newPaths: Array<IPath> = [];
  slugs.forEach((val) => {
    newPaths.push({ params: { slug: val } });
  });

  return {
    paths: newPaths,
    fallback: true,
  };
}
