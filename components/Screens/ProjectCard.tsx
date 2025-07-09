import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  url: string;
  title: string;
  description: string;
};

export default function ProjectCard({ url, title, description }: Props) {
  return (
    <div className="border border-white rounded-xs p-1">
      <h2>{title}</h2>
      <p className="text-[0.21rem]">{description}</p>
      <div className=" flex mt-1 flex-row space-x-0.5 text-[0.4rem]">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-[0.5rem]" icon={faGithub} />
        </Link>
        <p>|</p>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </div>
  );
}
