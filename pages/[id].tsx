import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Main from "../components/Main";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductDetails } from "../components/Product";

const ProductIdPage = ( {data} : InferGetStaticPropsType<typeof getStaticProps>) => {
  if(!data){
    return <div>Coś poszło nie tak...</div>
  }


  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow items-center">
        <ProductDetails data={{
            id: data.id,
            title:data.title,
            description:data.description,
            rating:data.rating.rate,
            thumbnailUrl:data.image,
            price:data.price,
            count:data.rating.count

        }} />
        </div>
        <Footer />
    </div>
  )
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data: StoreApiResponse[] = await res.json();

    return {
        paths: data.map(product => {
            return {
                params:{
                    id: product.id.toString(),
                }
            }
        }),
        fallback:true
    }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {

    if(!params?.id){
        return {
            props: {},
            notFound:true
        }
    }

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data: StoreApiResponse = await res.json();

    return {
        props: {
            data, //to bedzie przekazane do Products
        }
    }
}

interface StoreApiResponse {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    }
}

export default ProductIdPage;
