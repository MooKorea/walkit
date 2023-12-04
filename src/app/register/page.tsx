"use client";
import Panel from "@/components/Panel";
import PanelButton from "@/components/PanelButton";
import TextInput from "@/components/TextInput";
import Image from "next/image";

export default function Register() {
  return (
    <main className="relative h-full flex flex-col items-center justify-center">
      <div className="w-panelWidth flex flex-col gap-[0.625rem]">
        <h1 className="ml-2 mb-2 font-RubikMedium text-2xl mt-[5.313rem]">
          Create an account
        </h1>
        <Panel top align height="h-[18.063rem]">
          <div className="flex flex-col gap-3">
            <TextInput label={"Username"} />
            <TextInput label={"Email"} />
            <TextInput label={"Password"} />
          </div>
        </Panel>
        <PanelButton highlight bottom href="/dashboard">
          Continue
        </PanelButton>
      </div>
      <div className="relative flex flex-col gap-[0.625rem] grow justify-end">
        <PanelButton top>
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
        <div className="shadow-small font-RubikMedium mt-2 rounded-[1.25rem] border-2 h-[2.125rem] w-[8.25rem] border-textPrimary flex items-center justify-center">
          Log In
        </div>
      </div>
    </main>
  );
}
