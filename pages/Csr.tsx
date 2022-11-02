import { useQuery } from "@tanstack/react-query";
import { ProductListItem } from "../components/Product";
import React, { useState } from "react";
import ProductLayout from "../components/ProductLayout";
import PaginationCSR from "../components/PaginationCSR";

const productsCsr = () => {
  const [page, setPage] = useState(1);

  const nextPageHandler = () => {
    if (page === 10) {
      return <div>Sklep liczy maks 10 stron</div>;
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const previousPageHandler = () => {
    if (page === 1) {
      return <div>Nie można cofnąć strony 1</div>;
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const getProducts = async (page: number) => {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=25&offset=${
        (page - 1) * 25
      }`
    );
    const data: StoreApiResponse[] = await res.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery(["products", page], () =>
    getProducts(page)
  );


  return (
    <div className="flex flex-col flex-grow">
      <ProductLayout>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Coś poszło nie tak</div>}
        {data?.map((product) => (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                thumbnailUrl: product.image,
                title: product.title,
                rating: product.rating.rate,
                price: product.price,
                count: product.rating.count,
              }}
            />
          </li>
        ))}
      </ProductLayout>
      <PaginationCSR
        previousPageHandler={previousPageHandler}
        page={page}
        nextPageHandler={nextPageHandler}
      />
    </div>
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
