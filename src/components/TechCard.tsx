import TechLevel from "./TechLevel";

interface Props {
  name: string;
  levels: {[name: string]: number};
}

export default function TechCard({ name, levels }: Props) {
  return (
    <div className="w-full bg-gray-50 filter drop-shadow rounded-lg p-3 shadow-lg transform transition-all duration-75 hover:shadow-xl hover:-translate-y-1">
      <div className="border-b-2 border-gray-500">
        <h3 className="text-2xl font-semibold truncate">{name}</h3>
      </div>
      {Object.keys(levels).map((val, i) => {
        return <TechLevel key={i} name={val} currentLevel={levels[val]} maxLevel={5} />;
      })}
    </div>
  );
}
