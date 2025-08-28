type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  menu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  ),
  cross: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  ),
  location: (props: IconProps) => (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.75 8.75C15.75 14.875 9 20.125 9 20.125C9 20.125 2.25 14.875 2.25 8.75C2.25 6.66142 2.96116 4.65838 4.22703 3.18153C5.4929 1.70469 7.20979 0.875 9 0.875C10.7902 0.875 12.5071 1.70469 13.773 3.18153C15.0388 4.65838 15.75 6.66142 15.75 8.75Z"
        stroke="#A19074"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.375C10.2426 11.375 11.25 10.1997 11.25 8.75C11.25 7.30025 10.2426 6.125 9 6.125C7.75736 6.125 6.75 7.30025 6.75 8.75C6.75 10.1997 7.75736 11.375 9 11.375Z"
        stroke="#A19074"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.57869 15.405C12.0765 15.405 14.912 12.5695 14.912 9.07168C14.912 5.57387 12.0765 2.73834 8.57869 2.73834C5.08089 2.73834 2.24536 5.57387 2.24536 9.07168C2.24536 12.5695 5.08089 15.405 8.57869 15.405Z"
        stroke="#333333"
        strokeOpacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4954 16.9884L13.0516 13.5446"
        stroke="#333333"
        strokeOpacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cart: (props: IconProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_109_152)">
        <path
          d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
          stroke="#333333"
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
          stroke="#333333"
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
          stroke="#333333"
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_109_152">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  lock: (props: IconProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z"
        stroke="#333333"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6516 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25"
        stroke="#333333"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
