import Image from "next/image";
import sanityClient from "../../sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export default function ImageRenderer({
  node,
  children,
}: {
  node: { style: string; asset: Object };
  children: JSX.Element;
}) {
  const url =
    builder
      .dataset(process.env.NEXT_PUBLIC_SANITY_DATASET || "")
      .image(node.asset)
      .url() || "";

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Image src={url} layout="responsive" width={300} height={200} alt="post image" objectFit="contain" />
    </div>
  );
}
