import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import ProductLayout from "../../components/ProductLayout";
import { ProductListItem } from "../../components/Product";
import React from "react";
import PaginationSSG from "../../components/PaginationSSG";

const Page = ({ data }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col flex-grow">
      <ProductLayout>
        {data?.map((product) => (
          <li key={product.id}>
            <ProductListItem
              data={{
                id: product.id,
                thumbnailUrl: product.image,
                title: product.title,
                rating:product.rating.rate,
                count:product.rating.count,
                price:product.price
              }}
            />
          </li>
        ))}
      </ProductLayout>
      <PaginationSSG />
      </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params?.page) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${
      (Number(params.page) - 1) * 25
    }`
  );
  const data: StoreApiResponse[] | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 10 }, (_, idx) => ({
      params: {
        page: (idx + 1).toString(),
      },
    })),
    fallback: "blocking",
  };
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

export default Page;
