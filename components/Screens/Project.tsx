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
      <h1 className="text-[#f5f52c]">Projects</h1>
      <div className="grid grid-cols-2 gap-1">
        <div className="border border-white rounded-xs p-1">
          <h2>hey</h2>
        </div>
        <div className="border border-white rounded-xs p-1">
          <h2>3D Portfolio</h2>
          <p className="text-[0.21rem]">
            this is the 3d portfolio you are seeing now
          </p>
          
        </div>
      </div>
    </div>
  );
}
