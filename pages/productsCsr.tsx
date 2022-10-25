import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ProductListItem } from "../components/Product";
import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const productsCsr = () => {

    const [page,setPage] = useState(1);

    const nextPageHandler = () => {
        if(page===10){
            return <div>Sklep liczy maks 10 stron</div>
        } else {
            setPage(prevPage => prevPage+1)
        }
    }

    const previousPageHandler = () => {
        if(page===1){
            return <div>Nie można cofnąć strony 1</div>
        } else {
            setPage(prevPage => prevPage-1)
        }
    }

  const getProducts = async (page:number) => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=25&offset=${(page-1)*25}`);
    const data: StoreApiResponse[] = await res.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery(["products",page],() => getProducts(page));

  console.log(data);


  

  return (
    <>
      <Header />
      <Main>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Coś poszło nie tak</div>}
          {data?.map((product) => (
            <li key={product.id} className="shadow-xl border-2">
              <ProductListItem
                data={{
                  id: product.id,
                  thumbnailUrl: product.image,
                  title: product.title,
                  rating:product.rating.rate,
                  price:product.price,
                  count:product.rating.count
                }}
              />
            </li>
          ))}
      </Main>
      <footer className="w-full bg-slate-50 border-t-[1px] border-gray-300">
        <div className="px-6 py-3 flex justify-center sm:justify-between container items-center mx-auto">
          <Link href="/productsCsr">
            <a>
              <div className="hidden sm:flex bg-gray-200 w-32 py-5 rounded-xl"></div>
            </a>
          </Link>
          <div className="flex justify-evenly items-center">
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
          <p className="hidden sm:flex mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default productsCsr;
