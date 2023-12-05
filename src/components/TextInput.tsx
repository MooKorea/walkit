"use client";
import { useState } from "react";

interface TextInput {
  label?: string | boolean;
  placeholder?: string;
  width?: string;
  search?: boolean;
}

export default function TextInput({
  label = false,
  placeholder,
  width,
  search = false,
}: TextInput) {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={"relative y-[9.562rem] mx-auto " + (width ? width : "w-[21.813rem]")}>
      {label && <div className="ml-1 mb-1 text-textPrimary text-base">{label}</div>}
      <div className="relative rounded-[1rem] h-[2.625rem] w-full bg-inputBackground shadow-inset">
        {search && <SearchIcon />}
        <input
          className={
            "placeholder:text-textPrimary placeholder:opacity-70 focus:placeholder:opacity-0 text-textPrimary pl-4 focus:outline-none w-full h-full bg-transparent " +
            (search ? "pl-14" : "")
          }
          placeholder={search ? "Search" : placeholder}
          onChange={handleChange}
          spellCheck="false"
        />
        {(!text && search) && <MicrophoneIcon />}
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute top-[0.6rem] left-5 "
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#A17A4F"
        fillRule="evenodd"
        d="M9.6 4.8a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zM2.4 9.6a7.2 7.2 0 1113.068 4.171l5.78 5.78a1.2 1.2 0 01-1.697 1.697l-5.779-5.779A7.2 7.2 0 012.4 9.6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute top-[0.6rem] right-5 "
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#A17A4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      ></path>
    </svg>
  );
}
