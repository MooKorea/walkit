interface Arrow {
  left?: boolean;
}

export default function Arrow({left = false}:Arrow) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="17"
      fill="none"
      viewBox="0 0 9 17"
      style={left ? {transform: "rotate(180deg)"} : {}}
      >
      <path
        stroke="#1D1D1F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1.071l7 7.403-7 7.403"
      ></path>
    </svg>
  );
}
