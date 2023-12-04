export default function Mountains({...props} : React.BaseHTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 428 380"
      {...props}
    >
      <path
        fill="url(#paint0_linear_186_1440)"
        d="M40.5 45L0 0v322h428V5.5L386.5 56 336 65.5l-44 32-32.5-22L225 51l-22 18.5-31.5 6-38-10-48 17.5-45-38z"
      ></path>
      <path
        fill="url(#paint1_linear_186_1440)"
        d="M60.5 90.5L0 67v288h428V85h-92l-55.5 26-56-26-41.5 5.5-46.5-5.5-37 15-39-9.5z"
      ></path>
      <path
        fill="url(#paint2_linear_186_1440)"
        d="M35 113L0 76v304h428V91.5L383.5 106H340l-43 23.5-56 7.5-68-24-54.5 13.5h-46L35 113z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_186_1440"
          x1="214"
          x2="214"
          y1="-11"
          y2="151.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#49FFD3"></stop>
          <stop offset="1" stopColor="#F9E8AF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_186_1440"
          x1="214"
          x2="214"
          y1="22"
          y2="183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA776"></stop>
          <stop offset="1" stopColor="#F9E8AF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_186_1440"
          x1="214"
          x2="214"
          y1="47"
          y2="380"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4BF59"></stop>
          <stop offset="1" stopColor="#F9E8AF" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
