import React from 'react'

interface PaginationCSRProps {
    previousPageHandler: () => JSX.Element | undefined;
    page: number;
    nextPageHandler: () => JSX.Element | undefined;
}

const PaginationCSR = ({previousPageHandler, page, nextPageHandler}: PaginationCSRProps) => {
  return (
    <div className="w-100 bg-slate-50 flex justify-center items-center p-6">
            <button onClick={previousPageHandler}  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </button>
            <p className="mx-2">{page}</p>
            <button onClick={nextPageHandler} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
              Next
              <svg
                aria-hidden="true"
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
  )
}

export default PaginationCSR