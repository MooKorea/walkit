import Arrow from "@/components/icons/Arrow";
import PanelButton from "@/components/PanelButton";
import QuestionMark from "@/components/icons/QuestionMark";
import SelectBudget from "./SelectBudget";
import ProgressDots from "../ProgressDots";
import Heading from "@/components/Heading";

export default function Budget() {
  return (
    <>
      <Heading label="New Outing" href="/dashboard" />
      <div className="mt-4 flex flex-col w-panelWidth">
        <h1 className="mt-[-0.25rem] font-RubikMedium text-[1.5rem] flex items-center gap-3">
          Budget
          <QuestionMark />
        </h1>
        How much will you spend?
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <SelectBudget />
        <div className="flex gap-[0.625rem]">
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
