import Image from "next/image";


export default function ImageRenderer({
  node
}: {
  node?: { style?: string; asset?: {url: string} };
}) {

  return (
      <Image
        src={node?.asset?.url || ""}
        layout="responsive"
        width={400}
        height={200}
        objectFit="contain"
        alt="post image "
      />
  );
}
