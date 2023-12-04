interface TextInput {
  label?: string | boolean;
  placeholder?: string;
}

export default function TextInput({ label = false, placeholder }: TextInput) {
  return (
    <div className="relative w-[349px] y-[153px] mx-auto">
      {label && <div className="ml-1 mb-1 text-textPrimary text-base">{label}</div>}
      <div className="rounded-[16px] h-[42px] w-full bg-inputBackground shadow-inset">
        <input
          className="placeholder:text-textPrimary placeholder:opacity-70 focus:placeholder:opacity-0 text-textPrimary pl-4 focus:outline-none w-full h-full bg-transparent"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
