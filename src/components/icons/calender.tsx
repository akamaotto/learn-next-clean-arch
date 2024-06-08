import { SVGProps } from "react-html-props";

const Calender = (props: SVGProps) => {
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
        d="M5.5 2.75V3.25H6H10H10.5V2.75V1.875C10.5 1.72832 10.6585 1.5 11 1.5C11.3415 1.5 11.5 1.72832 11.5 1.875V2.75V3.25H12H13.5C14.1169 3.25 14.5 3.67445 14.5 4.0625V5.75H1.5V4.0625C1.5 3.67439 1.8829 3.25 2.5 3.25H4H4.5V2.75V1.875C4.5 1.72832 4.65854 1.5 5 1.5C5.34146 1.5 5.5 1.72832 5.5 1.875V2.75Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        opacity="0.4"
        d="M1 6.25H15V13.6875C15 14.4121 14.3281 15 13.5 15H2.5C1.67156 15 1 14.4121 1 13.6875V6.25ZM3 9.3125C3 9.55312 3.22375 9.75 3.5 9.75H4.5C4.775 9.75 5 9.55312 5 9.3125V8.4375C5 8.19687 4.775 8 4.5 8H3.5C3.22375 8 3 8.19687 3 8.4375V9.3125ZM7.5 8C7.225 8 7 8.19687 7 8.4375V9.3125C7 9.55312 7.225 9.75 7.5 9.75H8.5C8.775 9.75 9 9.55312 9 9.3125V8.4375C9 8.19687 8.775 8 8.5 8H7.5ZM11 9.3125C11 9.55312 11.225 9.75 11.5 9.75H12.5C12.775 9.75 13 9.55312 13 9.3125V8.4375C13 8.19687 12.775 8 12.5 8H11.5C11.225 8 11 8.19687 11 8.4375V9.3125ZM3.5 11.5C3.22375 11.5 3 11.6969 3 11.9375V12.8125C3 13.0531 3.22375 13.25 3.5 13.25H4.5C4.775 13.25 5 13.0531 5 12.8125V11.9375C5 11.6969 4.775 11.5 4.5 11.5H3.5ZM7 12.8125C7 13.0531 7.225 13.25 7.5 13.25H8.5C8.775 13.25 9 13.0531 9 12.8125V11.9375C9 11.6969 8.775 11.5 8.5 11.5H7.5C7.225 11.5 7 11.6969 7 11.9375V12.8125ZM11.5 11.5C11.225 11.5 11 11.6969 11 11.9375V12.8125C11 13.0531 11.225 13.25 11.5 13.25H12.5C12.775 13.25 13 13.0531 13 12.8125V11.9375C13 11.6969 12.775 11.5 12.5 11.5H11.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Calender;