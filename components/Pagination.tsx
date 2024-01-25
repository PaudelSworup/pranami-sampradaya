import React from "react";

const Pagination: React.FC<{
  totalPost: number;
  postPerPage: number;
  paginate: (id: number) => void;
}> = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      aria-label="Page navigation example"
      className="text-center m-1 mt-10 sm:mt-48"
    >
      <ul className="inline-flex -space-x-px  text-base  h-10">
        {pageNumbers?.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className="flex items-center cursor-pointer justify-center px-4 h-10 w-10 rounded-full leading-tight text-black bg-white border border-gray-300 hover:bg-gray-200 hover:text-gray-700  dark:text-gray-400"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
