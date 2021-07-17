export function ListRenderer({children}: {children: JSX.Element}) {
  return <ul className="list-disc ml-5">{children}</ul>;
}

export function ListItemRenderer({children}: { children: JSX.Element}) {
  return <li className="italic my-2">{children}</li>
}
