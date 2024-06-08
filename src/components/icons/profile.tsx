import { SVGProps } from "react-html-props";

const Profile = (props: SVGProps) => {
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
        d="M12.2929 4H10.5V2.20711L12.2929 4ZM9.5 8C9.5 8.69024 8.94041 9.25 8.25 9.25C7.56091 9.25 7 8.68909 7 8C7 7.31091 7.56091 6.75 8.25 6.75C8.94041 6.75 9.5 7.30976 9.5 8ZM10.8114 12.75H5.68864C5.72151 11.8468 6.46397 11.125 7.375 11.125H9.125C10.0365 11.125 10.7785 11.8465 10.8114 12.75Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        opacity="0.4"
        d="M10 4.5V1H4.3125C3.58762 1 3 1.58762 3 2.3125V13.6875C3 14.4121 3.58762 15 4.3125 15H12.1875C12.9124 15 13.5 14.4124 13.5 13.6875V4.5H10ZM8.25 6.25C9.2166 6.25 10 7.03367 10 8C10 8.96633 9.2166 9.75 8.25 9.75C7.28367 9.75 6.5 8.96633 6.5 8C6.5 7.03367 7.28477 6.25 8.25 6.25ZM10.875 13.25H5.625C5.38339 13.25 5.1875 13.0541 5.1875 12.8125C5.1875 11.6039 6.16641 10.625 7.375 10.625H9.125C10.333 10.625 11.3125 11.6042 11.3125 12.8125C11.3125 13.0531 11.1156 13.25 10.875 13.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Profile;