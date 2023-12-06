import Arrow from "@/components/icons/Arrow";
import PanelButton from "@/components/PanelButton";
import QuestionMark from "@/components/icons/QuestionMark";
import SelectDistance from "./SelectDistance";
import ProgressDots from "./ProgressDots";
import Heading from "@/components/Heading";

export default function NewOuting() {
  return (
    <>
      <Heading label="New Outing" href="/dashboard" />
      <div className="mt-4 flex flex-col w-panelWidth">
        <h1 className="mt-[-0.25rem] font-RubikMedium text-[1.5rem] flex items-center gap-3">
          Distance
          <QuestionMark />
        </h1>
        How far will you travel?
      </div>
      <div className="flex flex-col gap-[0.625rem]">
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

