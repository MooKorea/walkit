interface DividerLine {
  width?: string;
  color?: string;
}

export default function DividerLine({ width, color }: DividerLine) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "21.625rem"}
      height="0.063rem"
      fill="none"
      viewBox="0 0 346 1"
    >
      <path stroke="url(#paint0_linear_232_584)" d="M0 0.5L346 0.5"></path>
      <defs>
        <linearGradient
          id="paint0_linear_232_584"
          x1="346"
          x2="0"
          y1="1"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color ? color : "#A17A4F"} stopOpacity="0"></stop>
          <stop offset="0.5" stopColor={color ? color : "#A17A4F"}></stop>
          <stop offset="1" stopColor={color ? color : "#A17A4F"} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
