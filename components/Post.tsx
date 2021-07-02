import Image from "next/image";

export default function Post() {
  return (
    <article className="flex flex-col shadow my-4">
      <Image className="object-cover" src="/landscape.webp" width="500" height="500" alt="blog post image" />
      <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
          Automotive, Finance
        </a>
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
          Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
        </a>
        <p className="text-sm pb-3">
          By{" "}
          <a href="#" className="font-semibold hover:text-gray-800">
            David Grzyb
          </a>
          , Published on January 12th, 2020
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
