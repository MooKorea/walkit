import Arrow from "@/components/icons/Arrow";
import PanelButton from "@/components/PanelButton";
import QuestionMark from "@/components/icons/QuestionMark";
import SelectDistance from "./SelectDistance";
import ProgressDots from "./ProgressDots";

export default function NewOuting() {
  return (
    <>
      <div className="flex flex-col w-panelWidth mt-6">
        <h1 className="mt-[-4px] font-RubikMedium text-[24px] flex items-center gap-3">
          Distance
          <QuestionMark />
        </h1>
        How far will you travel?
      </div>
      <div className="flex flex-col gap-[10px]">
        <SelectDistance />
        <PanelButton bottom href="/new-outing/budget">
          Next
          <Arrow />
        </PanelButton>
      </div>
      <ProgressDots progress={0} />
    </>
  );
}

