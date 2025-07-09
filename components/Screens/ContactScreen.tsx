import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
type Props = {
  setScreen: (screen: string) => void;
};

export default function ContactScreen({ setScreen }: Props) {
  return (
    <div className="flex flex-col justify-center text-center text-[0.5rem] space-y-[0.4rem] text-white">
      <span className="text-white " onClick={() => setScreen("home")}>
        Back
      </span>
      <p className="text-[#e80050]">Contact</p>
      <div className="flex flex-row gap-3.5">
        <Link
          href="https://www.facebook.com/profile.php?id=61574823005894"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ebrahim-hdida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href="mailto:hdidaebrahim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link
          href="https://github.com/NotCure"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </div>
  );
}
