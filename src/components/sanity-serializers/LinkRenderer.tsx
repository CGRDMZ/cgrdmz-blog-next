
import { useEffect } from "react";

export default function LinkRenderer(props: any) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <a
      href={props?.mark.href}
      target="blank_"
      rel="nofollow noopener"
      className="text-blue-600 underline italic"
    >
      {props.children}
    </a>
  );
}
