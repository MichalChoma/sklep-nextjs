import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const PaginationSSG = () => {
const router = useRouter();
  const page = Number.parseInt(router.query.page?.toString() || "1") || 1;
  const prevPage = page - 1;
  const nextPage = page + 1;
  return (
    
    <div className="w-100 bg-slate-50 flex justify-center items-center p-6">
            <Link href={page === 1 ? "/products/1" : `/products/${prevPage}`}>
              <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <svg
                  aria-hidden="true"
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous
              </a>
            </Link>
            <p className="mx-2">{page}</p>
            <Link href={`/products/${nextPage}`}>
              <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                Next
                <svg
                  aria-hidden="true"
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
  
  )
}

export default PaginationSSG