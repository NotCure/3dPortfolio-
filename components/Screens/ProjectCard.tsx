import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

type Props = {
  url: string;
  title: string;
  description: string;
  tech: string[];
};

const techImages: Record<string, string> = {
  Cpp: "/logos/Cpp.svg",
  Java: "/logos/Java.svg",
  Javascript: "/logos/Javascript.svg",
  Nextjs: "/logos/Nextjs.svg",
  Typescript: "/logos/Typescript.svg",
  Threejs: "/logos/Threejs.png",
};

export default function ProjectCard({ url, title, description, tech }: Props) {
  return (
    <div className="border border-white rounded-xs p-1">
      <h2>{title}</h2>
      <p className="text-[0.21rem]">{description}</p>
      <div className="flex mt-1 flex-row items-center space-x-0.5 text-[0.4rem]">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-[0.5rem]" icon={faGithub} />
        </Link>
        <p>-</p>
        {tech.map((techName, index) => {
          const techImageSrc = techImages[techName];
          return (
            techImageSrc && (
              <Image
                key={index}
                src={techImageSrc}
                alt={techName}
                width={7}
                height={7}
                className="inline-block"
              />
            )
          );
        })}
      </div>
    </div>
  );
}
