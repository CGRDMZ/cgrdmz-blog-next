import Link from "next/link";

interface Props {
  children: string;
  url?: string;
}

export default function NavItem({ children, url }: Props) {
  return (
    <Link href={url || "#"}>
      <a className="pr-3 md:pr-5">{children}</a>
    </Link>
  );
}
