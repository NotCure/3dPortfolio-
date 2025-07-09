import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "./ProjectCard";
type Props = {
  setScreen: (screen: string) => void;
};

export default function ContactScreen({ setScreen }: Props) {
  return (
    <div className="flex flex-col justify-center text-center text-[0.5rem] space-y-[0.4rem] text-white">
      <span className="text-white " onClick={() => setScreen("home")}>
        Back
      </span>
      <h1 className="text-[#f5f52c]">Projects</h1>
      <div className="grid grid-cols-2 gap-1">
        <ProjectCard
          url="https://github.com/ebrahimhdida/Portfolio3D"
          title="Portfolio 3D"
          description="My portfolio website in 3D"
        />
        <ProjectCard
          url="https://github.com/ebrahimhdida/Portfolio3D"
          title="Portfolio 3D"
          description="My portfolio website in 3D"
        />
      </div>
    </div>
  );
}
