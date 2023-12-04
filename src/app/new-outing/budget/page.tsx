import Arrow from "@/components/icons/Arrow";
import PanelButton from "@/components/PanelButton";
import QuestionMark from "@/components/icons/QuestionMark";
import SelectBudget from "./SelectBudget";
import ProgressDots from "../ProgressDots";

export default function Budget() {
  return (
    <>
      <div className="flex flex-col w-panelWidth mt-6">
        <h1 className="mt-[-4px] font-RubikMedium text-[24px] flex items-center gap-3">
          Budget
          <QuestionMark />
        </h1>
        How much will you spend?
      </div>
      <div className="flex flex-col gap-[10px]">
        <SelectBudget />
        <div className="flex gap-[10px]">
          <PanelButton split left href="/new-outing">
            <Arrow left />
            Previous
          </PanelButton>
          <PanelButton split right href="/new-outing/invite-friends">
            Next
            <Arrow />
          </PanelButton>
        </div>
      </div>
      <ProgressDots progress={1} />
    </>
  );
}
