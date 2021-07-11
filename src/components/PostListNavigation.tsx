import PostListNavigationItem from "./PostListNavigationItem"

interface Props {
  pages: Array<string>;
  currentPage: number;
}

export default function PostListNavigation({pages, currentPage}: Props) {
  return (
  <div>
    <ul className="flex flex-row justify-center items-center my-4 flex-wrap">
      {currentPage - 1 != 0 && <PostListNavigationItem isCurrentPage={false} navigateToPage={currentPage-1}>&lt;</PostListNavigationItem>}
      {pages.map(val => Math.abs(currentPage - (+val)) < 3 && <PostListNavigationItem isCurrentPage={currentPage == +val} navigateToPage={+val} key={val}>{val}</PostListNavigationItem>)}
      {currentPage + 1 <= pages.length && <PostListNavigationItem isCurrentPage={false} navigateToPage={currentPage + 1}>&gt;</PostListNavigationItem>}

    </ul>
  </div>
  );
}