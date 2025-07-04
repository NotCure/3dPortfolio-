type Props = {
  setScreen: (screen: string) => void;
};

export default function ContactScreen({ setScreen }: Props) {
  return (
    <div className="flex flex-col text-[0.2rem] space-y-[0.2rem] text-white">
      <span className="text-white " onClick={() => setScreen("home")}>
        Back
      </span>

      <label className="flex flex-col">
        E-Mail
        <input
          type="email"
          className="bg-black bg-opacity-40 border border-[#007ae8] px-1 py-[1px] text-white"
        />
      </label>

      <label className="flex flex-col">
        Content
        <input
          type="text"
          className="bg-black bg-opacity-40 border border-[#007ae8] px-1 py-[1px] text-white"
        />
      </label>
    </div>
  );
}
