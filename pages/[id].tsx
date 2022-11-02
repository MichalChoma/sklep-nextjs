import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import { ProductDetails } from "../components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  return (
    <ProductDetails
      data={{
        id: data.id,
        title: data.title,
        description: data.description,
        rating: data.rating.rate,
        thumbnailUrl: data.image,
        price: data.price,
        count: data.rating.count,
      }}
    />
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          id: product.id.toString(),
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params?.id) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data: StoreApiResponse = await res.json();

  return {
    props: {
      data, //to bedzie przekazane do Products
    },
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

export default ProductIdPage;
