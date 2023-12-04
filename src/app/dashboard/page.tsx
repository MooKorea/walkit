import Button from "@/components/Button";
import CircleProgress from "@/components/CircleProgress";
import InfoIcon from "@/components/icons/InfoIcon";
import Mountains from "@/components/Mountains";
import PlayIcon from "@/app/dashboard/icons/PlayIcon";
import Image from "next/image";
import Buttons from "./Buttons";

export default function Dashboard() {
  return (
    <main className="relative h-full flex flex-col items-center">
      <Mountains className={"z-0 absolute top-[269px]"} />
      <div className="mt-[54px] pr-5 text-base text-textPrimary w-full h-10 flex justify-end items-center gap-4">
        William Smith
        <Image src={"/Profile-Pic.png"} height={40} width={40} alt="profile picture" />
      </div>
      <div className="flex flex-col w-panelWidth">
        Current Outing
        <h1 className="mt-[-4px] font-RubikMedium text-[24px] flex gap-3">
          Minneapolis, MN
          <Image src={"/Sunny-Icon.png"} height={36} width={36} alt="Sunny Icon" />
        </h1>
      </div>
      <div className="flex w-panelWidth justify-between mt-3">
        <div className="flex gap-2">
          <div className="flex flex-col items-end gap-4">
            <CircleProgress dashboard progress={0.6} />
            <CircleProgress progress={0.3} />
          </div>
          <div>
            <div className="text-textTertiary text-base leading-4 mt-8">
              <span className="font-RubikMedium text-[36px]">60</span>% <br />
              complete
            </div>
            <div className="text-textPrimary mt-4">
              <span className="font-RubikBold">7,340</span> steps
            </div>
            <div className="text-[#737373]">
              <span className="font-RubikBold">2,660</span> until goal
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 mr-2">
          <Button label="Details" width="w-[132px]" shadow icon={<InfoIcon />} />
          <Button
            label="Continue"
            width="w-[132px]"
            height="h-[55px]"
            shadow
            highlight
            icon={<PlayIcon />}
          />
        </div>
      </div>
      <Buttons />
    </main>
  );
}
