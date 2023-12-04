interface ProgressDots {
  progress: number;
}

export default function ProgressDots({ progress }: ProgressDots) {
  return (
    <div className="flex gap-16 mt-9 z-10">
      <Dot active={progress === 0} />
      <Dot active={progress === 1} />
      <Dot active={progress === 2} />
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div className={"w-[10px] h-[10px] rounded-full " + (active ? "bg-[#EF9E55]" : "bg-white")}></div>
  );
}
