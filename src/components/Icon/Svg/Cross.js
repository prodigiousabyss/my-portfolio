export const Cross = ({ ...props }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="85.3333"
        stroke="#000"
        d="M48 976l464-464M512 512l464-464M512 512l-464-464M512 512l464 464"
      ></path>
    </svg>
  );
};
