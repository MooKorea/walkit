interface NavigatorIcon {
  noBg?: boolean;
  className?: string;
}

export default function NavigatorIcon({ noBg = false, className }: NavigatorIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.875rem"
      height="2.938rem"
      fill="none"
      viewBox="0 0 46 47"
      className={className}
    >
      {!noBg && <circle cx="23" cy="23.5" r="23" fill="#fff" fillOpacity="0.79"></circle>}
      <path
        fill="#73ECC5"
        stroke="#52DBAE"
        d="M14.719 34.514c-1.209.633-2.566-.545-2.11-1.83l7.347-20.69c.32-.902 1.586-1.03 2.093-.172 2.765 4.677 7.022 8.392 12.052 10.453.888.364.946 1.6.096 2.046L14.718 34.514z"
      ></path>
    </svg>
  );
}
