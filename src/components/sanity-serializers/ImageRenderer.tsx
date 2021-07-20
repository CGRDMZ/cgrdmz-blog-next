import Image from "next/image";

export default function ImageRenderer({
  node,
}: {
  node?: { style?: string; asset?: { url: string; originalFilename: string } };
}) {
  return (
    <Image
      src={node?.asset?.url || ""}
      layout="responsive"
      width={400}
      height={200}
      objectFit="contain"
      alt={node?.asset?.originalFilename.split(".")[0]}
    />
  );
}
