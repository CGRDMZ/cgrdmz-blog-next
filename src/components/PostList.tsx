import { IPost } from "../model/postModel";
import Post from "../components/Post";
import PostListNavigation from "./PostListNavigation";

interface Props {
  posts?: Array<IPost>;
  pageArray?: Array<string>;
  currentPage?: number;
}

export default function PostList({ posts, pageArray, currentPage }: Props) {
  return (
    <div className="grid grid-cols-4 px-1 md:px-5 max-w-5xl mx-auto gap-3 min-h-screen">
      <div className="w-full col-span-4 divide-y-2 divide-gray-300">
        {posts && (
          <main className="grid grid-cols-1 md:grid-cols-2 my-5 gap-6">
            {posts?.map((post) => {
              return (
                <Post
                  key={post.slug?.current}
                  title={post.title}
                  imageUrl={post.imageUrl}
                  categories={post.categories}
                  author={post.author?.name}
                  date={post._createdAt}
                  slug={post.slug?.current}
                  blocks={post.body ? post.body[0] : ""}
                  leftAligned={false}
                />
              );
            })}
          </main>
        )}
        <PostListNavigation
          pages={pageArray || []}
          currentPage={currentPage || 1}
        />
      </div>
    </div>
  );
}
