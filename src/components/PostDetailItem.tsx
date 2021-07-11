interface Props {
  infoKey: string,
  value: string
}

export default function PostDetailItem({infoKey, value} : Props) {
  return <div className="text-sm font-light mr-2">{infoKey}: <span className="text-gray-900 font-semibold">{value}</span></div>
}