interface Props {
  name: string;
  currentLevel: number;
  maxLevel: number;
}

export default function TechLevel({ name, currentLevel, maxLevel }: Props) {
  if (currentLevel > maxLevel) {
    console.error("max level should be lower than current level.");
    return <div>Error!</div>;
  }
  return (
    <div className="mt-3">
      <h6 className="font-semibold truncate">{name}</h6>
      <div className="flex flex-row justify-start flex-wrap">
        {[...Array(maxLevel)].map((val, index) => {
          return (
            <div
              key={index}
              className={`h-2 w-4 mr-1 my-2  ${
                index < currentLevel ? "bg-gray-800" : "bg-gray-300"
              } rounded-full`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
