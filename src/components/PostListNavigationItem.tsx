import Link from "next/link";
import clsx from "classnames";

interface Props {
  children: string;
  isCurrentPage: boolean;
  navigateToPage: number;
}

export default function PostListNavigationItem({
  children,
  isCurrentPage,
  navigateToPage,
}: Props) {
  return (
    <li>
      <Link scroll={false} href={`/blog/${navigateToPage}`}>
        <a
          className={clsx(
            "px-3 m-1 border-2 border-gray-500 rounded-full text-md align-middle font-semibold antialiased",
            {
              "bg-gray-500 text-white": isCurrentPage,
              "text-gray-500": !isCurrentPage,
            }
          )}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
