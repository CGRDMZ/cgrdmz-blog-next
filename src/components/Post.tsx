import Image from "next/image";

export default function Post({imageUrl, title, categories, author, date}) {
  return (
    <article className="flex flex-col shadow mb-4">
      <Image className="object-cover absolute z-10" src={imageUrl} width="500" height="500" alt="blog post image" />
      <div className="bg-white flex flex-col justify-start p-6">
        <div className="inline-block">
          {categories.map((category) => <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4 mr-2" key={category}>{category}</a>)}
        </div>
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
          {title}
        </a>
        <p className="text-sm pb-3">
          By{" "}
          <a href="#" className="font-semibold hover:text-gray-800">
            {author}
          </a>
          , Published on {new Date(date).toLocaleString()}
        </p>
        <a href="#" className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
          dui porta volutpat. In sit amet posuere magna..
        </a>
        <a href="#" className="uppercase text-gray-800 hover:text-black">
          Continue Reading <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  );
}
