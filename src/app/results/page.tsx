import Mountains from "@/components/Mountains";
import Panel from "@/components/Panel";

export default function Results() {
  return (
    <main className="relative w-full h-full flex flex-col items-center">
      <div className="flex mt-[8rem] w-full text-[1.5rem] text-[#8E8E8E] justify-center">
        You Did It!
      </div>
      <div className="text-textTertiary flex flex-col items-center justify-center mt-12">
        <div className="flex font-RubikBold gap-2 items-center text-[4rem]">
          <BigSparkles />
          4,051
        </div>
        <div className="text-RubikMedium text-[1.25rem] mt-[-0.5rem]">Points Collected</div>
      </div>
      <Mountains className="absolute mt-[20rem] z-[-1]" />
      <Panel top height="h-[15.938rem] mt-[10rem]">
        
      </Panel>
      
    </main>
  );
}

function BigSparkles() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      fill="none"
      viewBox="0 0 57 57"
    >
      <path
        stroke="#34C898"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M11.875 7.125v9.5-9.5zm-4.75 4.75h9.5-9.5zm7.125 28.5v9.5-9.5zm-4.75 4.75H19 9.5zm21.375-38l5.43 16.285 13.57 5.09-13.57 5.09-5.43 16.285-5.43-16.285-13.57-5.09 13.57-5.09 5.43-16.285z"
      ></path>
    </svg>
  );
}
