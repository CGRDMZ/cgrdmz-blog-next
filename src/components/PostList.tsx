import { IPost, pages } from "../model/postModel";
import Post from "../components/Post";
import PostListNavigation from "./PostListNavigation";

interface Props {
  posts?: Array<IPost>;
  pageArray?: Array<string>;
  currentPage?: number;
}

export default function PostList({ posts, pageArray, currentPage }: Props) {
  return (
    <div className="container w-full lg:max-w-6xl mx-auto sm:px-3 min-h-full">
      {posts && (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
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
        </div>
      )}
      <PostListNavigation
        pages={pageArray || []}
        currentPage={currentPage || 1}
      />
    </div>
  );
}
