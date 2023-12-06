export function Sparkles({ big = false }: { big?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={big ? "w-[3.563rem] h-[3.563]" : "w-6 h-6"}
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

export function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.9rem"
      height="2.25rem"
      fill="none"
      viewBox="0 0 28 36"
    >
      <path
        stroke="#A17A4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.485 24.985l-6.364 6.365a2.996 2.996 0 01-4.24 0l-6.366-6.365a12 12 0 1116.97 0v0z"
      ></path>
      <path
        stroke="#A17A4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.182 19.682a4.5 4.5 0 10-6.364-6.364 4.5 4.5 0 006.364 6.364z"
      ></path>
    </svg>
  );
}

export function FootprintIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.938rem"
      height="2.5rem"
      fill="none"
      viewBox="0 0 31 40"
    >
      <path
        stroke="#A17A4F"
        strokeWidth="2"
        d="M7.982 27.616c1.947-.123 3.523-2.109 4.388-4.994.186-.62-.309-1.21-.958-1.178l-7.633.496c-.65.03-1.051.713-.804 1.303 1.205 2.76 3.06 4.498 5.007 4.373zM11.621 18.032c.932-.062 1.683-.862 1.683-1.847 0-1.508.15-3.201.39-5.048.571-4.217-.45-9.85-5.588-10.127C1.826.672.744 8.798 1.045 13.538c.09 1.292.27 2.524.54 3.663.211.861.992 1.446 1.864 1.385l8.172-.554zM27.221 32.874l-7.634-.496c-.649-.031-1.143.558-.958 1.179.835 2.884 2.442 4.87 4.389 4.994 1.947.124 3.77-1.613 5.006-4.374.247-.59-.154-1.24-.803-1.303zM22.642 11.945c-5.338.277-6.399 5.91-5.806 10.126.25 1.878.374 3.54.405 5.048 0 .985.78 1.785 1.749 1.847l8.458.554a1.856 1.856 0 001.935-1.385c.281-1.139.5-2.37.562-3.663.344-4.74-.78-12.866-7.303-12.527z"
      ></path>
    </svg>
  );
}

export function FactsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.875rem"
      height="1.875rem"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="#A17A4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.556 21.222H15V15h-1.556M15 8.778h.016M29 15a14 14 0 11-28 0 14 14 0 0128 0z"
      ></path>
    </svg>
  );
}
