import DividerLine from "@/components/DividerLine";
import Mountains from "@/components/Mountains";
import Panel from "@/components/Panel";
import PanelButton from "@/components/PanelButton";
import { FactsIcon, FootprintIcon, LocationIcon, Sparkles } from "./icons";

export default function Results() {
  return (
    <main className="relative w-full h-full flex flex-col items-center">
      <div className="flex flex-col gap-1 items-center mt-[6rem] w-full text-[1.5rem] text-[#8E8E8E] justify-center">
        You Did It!
        <DividerLine width="12.5rem" color="#454545" />
      </div>
      <div className="text-textTertiary flex flex-col items-center justify-center mt-8">
        <div className="flex font-RubikBold gap-2 items-center text-[4rem]">
          <Sparkles big />
          4,051
        </div>
        <div className="text-RubikMedium text-[1.25rem] mt-[-0.5rem]">
          Points Collected
        </div>
      </div>
      <Mountains className="absolute mt-[17rem] z-[-1]" />
      <div className="flex flex-col gap-[0.625rem]">
        <Panel top height="h-[15.938rem] mt-[9rem]">
          <div className="pt-2 w-full">
            <StatItem
              icon={<FootprintIcon />}
              number={2100}
              label="Steps Taken"
              points={210}
            />
            <StatItem
              icon={<LocationIcon />}
              number={4}
              label="New Locations"
              points={400}
            />
            <StatItem
              icon={<FactsIcon />}
              number={20}
              label="New Facts Collected"
              points={200}
              noLine
            />
          </div>
        </Panel>
        <div className="flex gap-[0.625rem]">
          <PanelButton left split>
            My Profile
          </PanelButton>
          <PanelButton right highlight split href="/dashboard">
            Dashboard
          </PanelButton>
        </div>
      </div>
    </main>
  );
}

interface StatItem {
  icon: React.ReactNode;
  number: number;
  label: string;
  points: number;
  noLine?: boolean;
}

function StatItem({ icon, number, label, points, noLine = false }: StatItem) {
  return (
    <div className="relative flex gap-6 w-full px-8 py-4">
      {icon}
      <div className="grow">
        <div className="font-RubikBold text-[1.25rem] text-textPrimary">{number.toLocaleString()}</div>
        <div className="font-RubikMedium text-[0.875rem] text-[#86888D]">{label}</div>
      </div>
      <div className="flex gap-2 items-center font-RubikBold text-base text-textTertiary">
        <Sparkles />
        <div>{points.toLocaleString()}</div>
      </div>
      <div className="absolute bottom-0">{!noLine && <DividerLine />}</div>
    </div>
  );
}
