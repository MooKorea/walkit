interface CloseButton {
  className?: string;
}

export default function CloseButton({ className }: CloseButton) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="#999999"
        strokeLinecap="round"
        strokeWidth="2"
        d="M21.798 2L2 21.799M21.798 21.799L2 2"
      ></path>
    </svg>
  );
}
