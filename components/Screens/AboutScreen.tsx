type Props = {
  setScreen: (screen: string) => void;
};

export default function AboutScreen({ setScreen }: Props) {
  return (
    <div className=" ">
      <span className="text-white " onClick={() => setScreen("home")}>
        {" "}
        Back
      </span>
      <p className="text-[#007ae8] font-bold text-[0.4rem]">About Me:</p>
      <p className="text-[0.25rem] font-light text-white">
        My name is Ebrahim, Currently Computer Science student in Belguim.
        <br />
        Im intrested in Low-level programming, and currently front-end mostly.
      </p>
    </div>
  );
}
