interface Props {
  children: string
}

export default function NavItem({ children } : Props) {
  return (
    <a href="#" className="pr-3 md:pr-5">
      {children}
    </a>
  );
}
