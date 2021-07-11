interface Props {
  name: string;
}

export default function Category({ name }: Props) {
  return <div className="bg-gray-400 text-white px-2 py-1 mr-1 rounded-full text-xs font-bold">{name}</div>;
}
