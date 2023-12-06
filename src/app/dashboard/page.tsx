import Button from "@/components/Button";
import CircleProgress from "@/components/CircleProgress";
import InfoIcon from "@/components/icons/InfoIcon";
import Mountains from "@/components/Mountains";
import PlayIcon from "@/app/dashboard/icons/PlayIcon";
import Image from "next/image";
import Buttons from "./Buttons";

export default function Dashboard() {
  return (
    <main className="relative w-full h-full flex flex-col items-center">
      <Mountains className={"z-0 absolute top-[16.813rem]"} />
      <div className="mt-[3.375rem] pr-5 text-base text-textPrimary w-full h-10 flex justify-end items-center gap-4">
        William Smith
        <div className="relative w-[2.5rem] h-[2.5rem]">
          <Image src={"/Profile-Pic.png"} fill sizes="2.5rem" alt="profile picture" />
        </div>
      </div>
      <div className="flex flex-col w-panelWidth">
        Current Outing
        <h1 className="mt-[-0.25rem] font-RubikMedium text-[1.5rem] flex gap-3">
          Minneapolis, MN
          <div className="relative w-[2.25rem] h-[2.25rem]">
            <Image src={"/Sunny-Icon.png"} fill sizes="2.25rem" alt="Sunny Icon" />
          </div>
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
              <span className="font-RubikMedium text-[2.25rem]">60</span>% <br />
              complete
            </div>
            <div className="text-textPrimary mt-4 text-base">
              <span className="font-RubikBold">7,340</span> steps
            </div>
            <div className="text-[#737373] text-base">
              <span className="font-RubikBold">2,660</span> until goal
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 mr-2">
          <Button label="Details" width="w-[8.25rem]" shadow icon={<InfoIcon />} />
          <Button
            label="Continue"
            width="w-[8.25rem]"
            height="h-[3.438rem]"
            shadow
            highlight
            icon={<PlayIcon />}
            href="/map"
          />
        </div>
      </div>
      <Buttons />
    </main>
  );
}
