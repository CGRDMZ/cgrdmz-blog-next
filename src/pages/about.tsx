import Head from "next/head";
import Image from "next/image";
import TechCard from "../components/TechCard";

export default function About() {
  return (
    <>
      <Head>
        <title>CGRDMZ - About</title>
      </Head>
      <div className="w-full container xl:max-w-6xl mx-auto">
        <div className="flex flex-col justify-start items-center">
          <div className="flex justify-center rounded-full items-center m-10">
            <Image
              className="rounded-full"
              src="/profile-img.jpg"
              width={300}
              height={300}
              objectFit="cover"
              alt="profile image"
            />
          </div>
          <div className="w-11/12 sm:w-1/2 text-gray-800 my-5 tracking-normal">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 w-2/5 pb-0.5">
              Biography
            </h1>
            <p className="text-gray-700 mt-1">
              My name is Çağrı, I am 21 years old. I was born in Erzurum,
              Türkiye. I have always been curious and passionate about tech
              related topics, and also I love building stuff with the new
              technologies I learn. I have started learning programming when I
              was 9 years old. I was learning simple things about web
              development and beside of that i was learning C language. Starting
              from that I have never stopped learning new things and
              technologies. Because of the interests I have as a child, I have
              decided to enter a university. After the university entrance exam,
              I have got into Dokuz Eylül University, Computer Science
              Department.
            </p>

            <h1 className="text-3xl font-bold border-b-2 border-gray-600 w-2/5 pb-0.5 mt-5">
              Technologies
            </h1>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <TechCard
                name="HTML/XML"
                levels={{ Knowledge: 5, Experience: 4 }}
              />
              <TechCard name="CSS" levels={{ Knowledge: 4, Experience: 3 }} />
              <TechCard
                name="Javascript"
                levels={{ Knowledge: 4, Experience: 4 }}
              />
              <TechCard
                name="TypeScript"
                levels={{ Knowledge: 5, Experience: 4 }}
              />
              <TechCard
                name="Node.js"
                levels={{ Knowledge: 4, Experience: 4 }}
              />
              <TechCard name="React" levels={{ Knowledge: 4, Experience: 4 }} />
              <TechCard
                name="Next.js"
                levels={{ Knowledge: 5, Experience: 4 }}
              />
              <TechCard
                name="GraphQL"
                levels={{ Knowledge: 3, Experience: 2 }}
              />
              <TechCard name="Java" levels={{ Knowledge: 5, Experience: 5 }} />
              <TechCard
                name="JavaFX"
                levels={{ Knowledge: 4, Experience: 4 }}
              />
              <TechCard name="C#" levels={{ Knowledge: 3, Experience: 3 }} />
              <TechCard
                name="Git/Github"
                levels={{ Knowledge: 4, Experience: 4 }}
              />
              <TechCard name="SQL" levels={{ Knowledge: 4, Experience: 2 }} />
              <TechCard
                name="Android"
                levels={{ Knowledge: 3, Experience: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
