import Mountains from "@/components/Mountains";
import PanelButton from "@/components/PanelButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-full flex flex-col items-center justify-center">
      <Mountains className={"z-0 absolute top-[18.688rem]"} />
      <h1 className="mt-[9.688rem] text-[4rem] text-textTertiary font-RubikMedium">
        Walkit
      </h1>
      <div className="relative flex flex-col gap-[0.625rem] grow justify-end">
        <PanelButton top href="/register">
          <Image src="/mail-icon.png" width={27} height={27} alt="mail icon" />
          Continue with Email
        </PanelButton>
        <PanelButton>
          <Image src="/Facebook-icon.png" width={23} height={23} alt="facebook icon" />
          Continue with Facebook
        </PanelButton>
        <PanelButton>
          <Image src="/apple-icon.png" width={28} height={28} alt="apple icon" />
          Continue with Apple
        </PanelButton>
        <PanelButton bottom>
          <Image src="/google-icon.png" width={23} height={23} alt="google icon" />
          Continue with Google
        </PanelButton>
      </div>
      <div className="text-textPrimary text-base flex justify-center flex-col items-center my-12">
        <div>Already have an account?</div>
        <div className="shadow-small font-RubikMedium mt-2 rounded-[1.25rem] border-2 h-[2.125rem] w-[8.25rem] border-textPrimary flex items-center justify-center">Log In</div>
      </div>
    </main>
  );
}
