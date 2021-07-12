import {
  getPosts,
  IPost,
  pages,
} from "../../model/postModel";
import PostList from "../../components/PostList";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { NextRouter, useRouter } from "next/router";

interface Props {
  posts: Array<IPost>;
  pagesArray: Array<string>;
  currentPage: number;
}

export default function Home({ posts, pagesArray, currentPage }: Props) {
  const router: NextRouter = useRouter();

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <PostList posts={posts} pageArray={pagesArray} currentPage={currentPage} />
  );
}

export async function getStaticPaths() {
  const paths = (await pages()).map((val) => {
    return { params: { page: val } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

interface ContextParams extends ParsedUrlQuery {
  page: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as ContextParams;
  const posts = await getPosts(+params.page);
  console.log(params.page, "is revalidated. page size is: ", posts.length);
  if (posts.length == 0) {
    return { notFound: true };
  }

  const pagesArray = await pages();
  return {
    props: {
      currentPage: +params.page,
      posts,
      pagesArray,
    },
    revalidate: +process.env.VALIDATE_TIME! || 120,
  };
};
