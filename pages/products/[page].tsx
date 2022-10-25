import next, { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { ProductListItem } from "../../components/Product";
import React from "react";
import Footer from "../../components/Footer";
import PaginationSSG from "../../components/PaginationSSG";

const Page = ({ data }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <Main>
        {data?.map((product) => (
          <li key={product.id} className="shadow-xl border-2 ">
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
      </Main>
      <Footer>
        <PaginationSSG />
      </Footer>
    </>
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
