import { SVGProps } from "react-html-props";

const Email = (props: SVGProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.6875 2.5C14.1112 2.5 14.5 2.87058 14.5 3.38462C14.5 3.67315 14.3713 3.93636 14.1642 4.10061L8.21588 8.80701C8.21573 8.80713 8.21558 8.80724 8.21543 8.80736C8.0853 8.9094 7.9147 8.9094 7.78458 8.80736C7.78442 8.80724 7.78427 8.80713 7.78412 8.80701L1.83597 4.10078C1.83586 4.10069 1.83575 4.1006 1.83564 4.10052C1.62878 3.93605 1.5 3.67275 1.5 3.38462C1.5 2.87051 1.88862 2.5 2.3125 2.5H13.6875Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        opacity="0.4"
        d="M1.525 5.41531L7.475 10.123C7.78672 10.3682 8.21328 10.3682 8.525 10.123L14.475 5.41531C14.8059 5.15281 15 4.74319 15 4.30762V12.1538C15 13.172 14.2152 13.9999 13.25 13.9999H2.75C1.7834 13.9999 1 13.172 1 12.1538V4.30762C1 4.74319 1.1945 5.15281 1.525 5.41531Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Email;
